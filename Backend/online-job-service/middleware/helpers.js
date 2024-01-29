const htmlToText = require('html-to-text');

const getFilteredEmailMessages = async emailMessage => {
    try {
        let messageData = [];
        if (emailMessage.payload.parts) {
            for (const part of emailMessage.payload.parts) {
                if (part.mimeType === 'text/plain') {
                    messageData = Buffer.from(part.body.data, 'base64')
                        .toString('utf-8')
                        .replace(/(https?:\/\/[^\s]+)|[\n\r\s]+/g, ' ');
                    break;
                } else if (part.mimeType === 'text/html' && part.mimeType !== 'text/plain') {
                    const text = htmlToText.convert(
                        Buffer.from(part.body.data, 'base64').toString('utf-8'),
                        {
                            wordwrap: 200,
                            selectors: [
                                { selector: 'a', options: { ignoreHref: true } },
                                { selector: 'img', format: 'skip' },
                            ],
                        }
                    );

                    messageData = text.replace(/(https?:\/\/[^\s]+)|[\n\r\s]+/g, ' ');
                } else if (
                    part.mimeType === 'multipart/related' ||
                    part.mimeType === 'multipart/alternative'
                ) {
                    for (const partOfParts of part.parts) {
                        if (partOfParts.mimeType === 'text/plain') {
                            messageData = Buffer.from(partOfParts.body.data, 'base64')
                                .toString('utf-8')
                                .replace(/(https?:\/\/[^\s]+)|[\n\r\s]+/g, ' ');
                            break;
                        } else if (
                            partOfParts.mimeType === 'text/html' &&
                            partOfParts.mimeType !== 'text/plain'
                        ) {
                            const text = htmlToText.convert(
                                Buffer.from(partOfParts.body.data, 'base64').toString('utf-8'),
                                {
                                    wordwrap: 200,
                                    selectors: [
                                        { selector: 'a', options: { ignoreHref: true } },
                                        { selector: 'img', format: 'skip' },
                                    ],
                                }
                            );

                            messageData = text.replace(/(https?:\/\/[^\s]+)|[\n\r\s]+/g, ' ');
                        }
                    }
                }
            }
        } else {
            const text = htmlToText.convert(
                Buffer.from(emailMessage.payload.body.data, 'base64').toString('utf-8'),
                {
                    wordwrap: 80,
                    selectors: [
                        { selector: 'a', options: { ignoreHref: true } },
                        { selector: 'img', format: 'skip' },
                    ],
                }
            );

            messageData = text.replace(/(https?:\/\/[^\s]+)|[\n\r\s]+/g, ' ');
        }
        return messageData;
    } catch (err) {
        logger.error(`Error while retrivig the filtered email messages: ${err}`);
    }
};

module.exports = {
    getFilteredEmailMessages,
};
