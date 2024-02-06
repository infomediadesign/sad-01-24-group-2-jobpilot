const emailMessageWithOutParts = {
    id: '187b002f72c393',
    threadId: '187b00102f72c393',
    labelIds: ['IMPORTANT', 'STARRED', 'CATEGORY_UPDATES', 'INBOX'],
    snippet:
        'Dear Mahesh Nidugala, thank you for your application as Student Assistant with focus on Full Stack Web Development (35842) and the trust you have placed in us. We are very pleased that the Fraunhofer-',
    payload: {
        partId: '',
        mimeType: 'text/html',
        filename: '',
        headers: [
            {
                name: 'Delivered-To',
                value: 'mahesh.nidugala@gmail.com',
            },
            {
                name: 'Received',
                value: 'by 2002:a05:6f02:839c:b0:4b:d966:475b with SMTP id b28csp2482660rcf;        Sun, 23 Apr 2023 14:24:29 -0700 (PDT)',
            },
            {
                name: 'X-Google-Smtp-Source',
                value: 'AKy350ZdgPAT/Jxyt4fINYzsr1ORbiygicYE6cCJyNqBpL4I17AZYh0BQa0tu1RJuc9EJBjGHXlP',
            },
            {
                name: 'X-Received',
                value: 'by 2002:a05:6402:7cf:b0:504:af14:132d with SMTP id u15-20020a05640207cf00b00504af14132dmr11525919edy.13.1682285068836;        Sun, 23 Apr 2023 14:24:28 -0700 (PDT)',
            },
            {
                name: 'ARC-Seal',
                value: 'i=1; a=rsa-sha256; t=1682285068; cv=none;        d=google.com; s=arc-20160816;        b=JyrU9LyyOWpmsJwBbxKJ7CYWZGgA4EGWRx676bTUFKy5OJgRsTGX/hqW9C2+f+zYNS         NKN82jlSSalcnZK63wDHMlHNPxr4yZ/onhAMNZK+uvGDSw/+Xj+Gue1zwCJiWugE99uo         cbunVWPFEEMZU/L5QNl6gO8lpoxLSx48HGjzqO6ztHwoi33NJAqCQ5iXgWUJuPuBlVZ1         nL++gcqXOK26zLgDXLuVqtds6TKF/5MyPrSUxY2FwBZrLEMk09TWsf6/tRoG57+T8iaT         rCPeFM47l48MMjVBj8ESLnnxDLjb77ZRHj5OPHle+a7U7NExhMzDzWxb1Eqds4HA3Jnh         X6eg==',
            },
            {
                name: 'ARC-Message-Signature',
                value: 'i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=sf-msg-id:content-transfer-encoding:mime-version:subject:message-id         :to:reply-to:from:date;        bh=c6Nj9cJG5xfa7IEJdTFE19ngVJb+C5b3UKKWI+Mk15c=;        b=fp5fapwRiVf88TU1Fm3wdybAMuqi9XzEg8JEhhYTC0HeTgU8KlDqA85E6WERSLbR26         ebvZWaaxNVEsu4/fU0y3WaB/dX2dre7LofuszDoo5CbakytZl071dZRy9yD0e2o/AaTF         EPdSAvEpTIUNWdtk5CfUZ/prHs04t5eHnUe9+NQpvXDwNeL3MXe19gWnA72lxgIikYxL         DRzV8QtnXBPdA7zqe7tgjdnAzc1FjL/mTsoBIOh+ZtZAUeKOeAfvOPESYyle5me/PrPl         C3qPIM5ZAoEnr5/NMUqrPfC5AYihLdFMdIG1IG7bbtMweNmaCAqwLrO3pLz3IJd6YK+t         WW5g==',
            },
            {
                name: 'ARC-Authentication-Results',
                value: 'i=1; mx.google.com;       spf=pass (google.com: domain of nicht-antworten.recruiting@sap-service.fraunhofer.de designates 130.214.193.85 as permitted sender) smtp.mailfrom=nicht-antworten.recruiting@sap-service.fraunhofer.de',
            },
            {
                name: 'Return-Path',
                value: '\u003cnicht-antworten.recruiting@sap-service.fraunhofer.de\u003e',
            },
            {
                name: 'Received',
                value: 'from prodmail33d.sapsf.eu (prodmail33d.sapsf.eu. [130.214.193.85])        by mx.google.com with ESMTPS id ca18-20020aa7cd72000000b00506b17baba2si7097277edb.579.2023.04.23.14.24.28        for \u003cmahesh.nidugala@gmail.com\u003e        (version=TLS1_3 cipher=TLS_AES_256_GCM_SHA384 bits=256/256);        Sun, 23 Apr 2023 14:24:28 -0700 (PDT)',
            },
            {
                name: 'Received-SPF',
                value: 'pass (google.com: domain of nicht-antworten.recruiting@sap-service.fraunhofer.de designates 130.214.193.85 as permitted sender) client-ip=130.214.193.85;',
            },
            {
                name: 'Authentication-Results',
                value: 'mx.google.com;       spf=pass (google.com: domain of nicht-antworten.recruiting@sap-service.fraunhofer.de designates 130.214.193.85 as permitted sender) smtp.mailfrom=nicht-antworten.recruiting@sap-service.fraunhofer.de',
            },
            {
                name: 'Received',
                value: 'from ss33mailpostfix07.dc033.sf.priv (unknown [10.33.3.170]) (using TLSv1.3 with cipher TLS_AES_256_GCM_SHA384 (256/256 bits)\t key-exchange X25519 server-signature RSA-PSS (2048 bits)) (No client certificate requested) by prodmail33d.sapsf.eu (Postfix) with ESMTPS id 4Q4Lqw4JMczGrqp6 for \u003cmahesh.nidugala@gmail.com\u003e; Sun, 23 Apr 2023 21:24:28 +0000 (UTC)',
            },
            {
                name: 'Received',
                value: 'from pc33bsub07 (mail.dc033.sf.priv [10.33.2.217]) by ss33mailpostfix07.dc033.sf.priv (Postfix) with ESMTP id 4Q4Lqw475DzPjct for \u003cmahesh.nidugala@gmail.com\u003e; Sun, 23 Apr 2023 21:24:28 +0000 (UTC)',
            },
            {
                name: 'Date',
                value: 'Sun, 23 Apr 2023 23:24:28 +0200 (CEST)',
            },
            {
                name: 'From',
                value: 'Fraunhofer \u003cnicht-antworten.recruiting@sap-service.fraunhofer.de\u003e',
            },
            {
                name: 'Reply-To',
                value: 'Fraunhofer \u003cnicht-antworten.recruiting@sap-service.fraunhofer.de\u003e',
            },
            {
                name: 'To',
                value: 'Mahesh Nidugala \u003cmahesh.nidugala@gmail.com\u003e',
            },
            {
                name: 'Message-ID',
                value: '\u003c191042317.225462.1682285068575.JavaMail.sfuser@pc33bsub07.successfactors.com\u003e',
            },
            {
                name: 'Subject',
                value: 'Your Application - Student Assistant with focus on Full Stack Web Development at IPK\u200b\u200b\u200b\u200b\u200b\u200b\u200b',
            },
            {
                name: 'MIME-Version',
                value: '1.0',
            },
            {
                name: 'Content-Type',
                value: 'text/html; charset=UTF-8',
            },
            {
                name: 'Content-Transfer-Encoding',
                value: 'quoted-printable',
            },
            {
                name: 'sf-msg-id',
                value: '2df73cba-ced5-4675-b959-76fd99723ee1',
            },
        ],
        body: {
            size: 856,
            data: 'PHA-RGVhciAmbmJzcDtNYWhlc2ggTmlkdWdhbGEsPC9wPg0KDQo8cD50aGFuayB5b3UgZm9yIHlvdXIgYXBwbGljYXRpb24gYXMgU3R1ZGVudCBBc3Npc3RhbnQgd2l0aCBmb2N1cyBvbiBGdWxsIFN0YWNrIFdlYiBEZXZlbG9wbWVudCZuYnNwOygzNTg0MikgYW5kIHRoZSB0cnVzdCB5b3UgaGF2ZSBwbGFjZWQgaW4gdXMuIFdlIGFyZSB2ZXJ5IHBsZWFzZWQgdGhhdCB0aGUgRnJhdW5ob2Zlci1HZXNlbGxzY2hhZnQgaXMgb2YgaW50ZXJlc3QgdG8geW91IGFzIGEgZnV0dXJlIGVtcGxveWVyIGFuZCB0aGF0IHlvdSBjYW4gaW1hZ2luZSBiZWNvbWluZyBwYXJ0IG9mIG91ciB0ZWFtLjwvcD4NCg0KPHA-V2UgdGFrZSBlbm91Z2ggdGltZSB0byBjYXJlZnVsbHkgbG9vayBhdCB5b3VyIGFwcGxpY2F0aW9uIGRvY3VtZW50cyBhbmQgZ2V0IGEgY29tcHJlaGVuc2l2ZSBwaWN0dXJlIGltcHJlc3Npb24gb2YgeW91ciBxdWFsaWZpY2F0aW9ucy48L3A-DQoNCjxwPlZpYSBvdXIgY2FyZWVyIHBvcnRhbCA8YSBocmVmPSJodHRwczovL2pvYnMuZnJhdW5ob2Zlci5kZS8_bG9jYWxlPWVuX1VTIj5odHRwczovL2pvYnMuZnJhdW5ob2Zlci5kZS8_bG9jYWxlPWVuX1VTPC9hPiB5b3UgY2FuIGtlZXAgdXAgdG8gZGF0ZSBhdCBhbnkgdGltZS48L3A-DQoNCjxwPldlIHdpbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUuPC9wPg0KDQo8cD5LaW5kIHJlZ2FyZHMsPGJyIC8-DQpNYXJpYSBSb2dow6kmbmJzcDs8YnIgLz4NCkZyYXVuaG9mZXIgSW5zdGl0dXRlIGZvciBQcm9kdWN0aW9uIFN5c3RlbXMgYW5kIERlc2lnbiBUZWNobm9sb2d5IElQSyZuYnNwO2luIEJlcmxpbiZuYnNwOyZuYnNwOzwvcD4NCg==',
        },
    },
    sizeEstimate: 4927,
    historyId: '340948',
    internalDate: '1682285068000',
};

const emailMessageResponse = [
    {
        message:
            "Message Id: 18ccf6655a6b1776, date: Wed, 3 Jan 2024 04:57:19 -0800 (PST), Subject: Deutsche Bank - Thank you for your application -- Dear Mahesh Nidugala , Thank you for your recent interest in Deutsche Bank's recruitment process with relation to Working Student/ Werkstudent (m/f/x) in Technology, Data and Innovation at the Berlin Technology We have received a large number of applications for this position and unfortunately you have not been selected for an interview at this stage. However, we are keen to maintain contact with you, and encourage you to apply for future employment opportunities with Deutsche Bank. Stay up to date on our latest job postings by visiting: db.com/careers. You can also stay in the know through our various social media channels - LinkedIn, Facebook, Twitter and Glassdoor. Our best wishes for your future career. Yours sincerely, Deutsche Bank Talent Sourcing This email was intended for mahesh.nidugala@gmail.com This e-mail may contain confidential and/or privileged information. If you are not the intended recipient (or have received this e-mail in error) please notify the sender immediately and destroy this e-mail. Any unauthorized copying, disclosure or distribution of the material in this e-mail is strictly forbidden. · .",
    },
    {
        message:
            "Message Id: 18ccf6655a6b1776, date: Wed, 3 Jan 2024 04:57:19 -0800 (PST), Subject: Deutsche Bank - Thank you for your application -- Dear Mahesh Nidugala , Thank you for your recent interest in Deutsche Bank's recruitment process with relation to Working Student/ Werkstudent (m/f/x) in Technology, Data and Innovation at the Berlin Technology We have received a large number of applications for this position and unfortunately you have not been selected for an interview at this stage. However, we are keen to maintain contact with you, and encourage you to apply for future employment opportunities with Deutsche Bank. Stay up to date on our latest job postings by visiting: db.com/careers. You can also stay in the know through our various social media channels - LinkedIn, Facebook, Twitter and Glassdoor. Our best wishes for your future career. Yours sincerely, Deutsche Bank Talent Sourcing This email was intended for mahesh.nidugala@gmail.com This e-mail may contain confidential and/or privileged information. If you are not the intended recipient (or have received this e-mail in error) please notify the sender immediately and destroy this e-mail. Any unauthorized copying, disclosure or distribution of the material in this e-mail is strictly forbidden. · .",
    },
];
const emailMessageWithParts = {
    id: '18b92dfa08f8bf38',
    threadId: '18b92df8eb5884ef',
    labelIds: ['IMPORTANT', 'CATEGORY_PERSONAL', 'INBOX'],
    snippet:
        'Your application with BASF Dear Mr Nidugala, Thank you for your interest in BASF. We received your application on 08.08.2023 for the position of Internship Web Development (m/f/d) at BASF SE. You can',
    payload: {
        partId: '',
        mimeType: 'multipart/mixed',
        filename: '',
        headers: [
            {
                name: 'Delivered-To',
                value: 'mahesh.nidugala@gmail.com',
            },
            {
                name: 'Received',
                value: 'by 2002:a05:6f02:229d:b0:5b:e70a:ccea with SMTP id n29csp839305rch;        Thu, 2 Nov 2023 18:50:11 -0700 (PDT)',
            },
            {
                name: 'X-Google-Smtp-Source',
                value: 'AGHT+IEvxToWEAyy87sQQiQLZghZf/arr/SwzE/LfJUIQy4q8iUUNI/Br7sQBGAzn4/tEN9rn0ru',
            },
            {
                name: 'X-Received',
                value: 'by 2002:a05:600c:3b93:b0:401:b2c7:34a8 with SMTP id n19-20020a05600c3b9300b00401b2c734a8mr17591028wms.7.1698976211345;        Thu, 02 Nov 2023 18:50:11 -0700 (PDT)',
            },
            {
                name: 'ARC-Seal',
                value: 'i=2; a=rsa-sha256; t=1698976211; cv=pass;        d=google.com; s=arc-20160816;        b=Cp9J/dH6i26UkD2mleWmow2RMd64ZAsgmAJ7e7d+NsshSRnKwZkWzYfGsqjycTweVV         /vqD9S6QX26zbEDNMwRRSYnJC5wo6L0Y0eF1LLnP+EVGwjDDHi07yRp2CEMP/StqGtbl         q5/bxjwv8ZqXLCvG7cZk6YsWICRbvNkgNOfjkMOrVAOEWq5Nz/K/PMeeKPOuXZXQBC5+         xfMCWfcHhERq5hgxY0YDz/62/pr/WrIrWebssja5GSyW1MmsqBM5VrflOa26OKbo8aYT         t9yWDXBp66GX3iG1eSEqgEVhCGXHLRXWiDb4VqnTTgGX+ehO0sjlW9bQtGfb5T+mhUIa         RInQ==',
            },
            {
                name: 'ARC-Message-Signature',
                value: 'i=2; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=importance:mime-version:message-id:to:subject:from:date         :dkim-signature;        bh=RGS7LzjZtUjqHgnkALHkj2PVr0l70of4QpPH/upphnQ=;        fh=Re1ycd3A/qQJrJ8tg/EQQCWTuIXbt9bBBGS4KyVVmgM=;        b=0pd+DCJ+RFTkX4SlqwgPMjDm/DOdlBTUD053Qgv4N33BX2qE+ce9ZrYQeQlA7A9h86         A0vi06OZAKPpa63RpbVf205eI5Bl9zG/DAqjk2yRSySYjPtu4JJeoOVyH4+k8aUQgHuO         vPRCGwaGx3K/URkJpqwk7oOkiXzWTh8nG9fOOA0DUizWm4sYCA/ANEA/OopUlFDfps8+         9UL5n6J80jPscrB3MvuHpEUrbAZnOvxckiGBEbQtytHGVa/rpDppcYF25P9xnb8q3lhf         GcXWVdOWB8pGVeCdIIXiAUlKdDKU+i6xODtrilhDAPXuJS7lQwXwdEwaxRXOjV0Y+8Dp         76wQ==',
            },
            {
                name: 'ARC-Authentication-Results',
                value: 'i=2; mx.google.com;       dkim=pass header.i=@basf.com header.s=selector2 header.b=A3sNA5XE;       arc=pass (i=1 spf=pass spfdomain=basf.com dmarc=pass fromdomain=basf.com);       spf=pass (google.com: domain of jobs@basf.com designates 2a01:111:f400:fe1a::60c as permitted sender) smtp.mailfrom=jobs@basf.com;       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=basf.com',
            },
            {
                name: 'Return-Path',
                value: '\u003cjobs@basf.com\u003e',
            },
            {
                name: 'Received',
                value: 'from EUR03-DBA-obe.outbound.protection.outlook.com (mail-dbaeur03on2060c.outbound.protection.outlook.com. [2a01:111:f400:fe1a::60c])        by mx.google.com with ESMTPS id m12-20020a05600c3b0c00b003fbdb7c4fedsi672999wms.149.2023.11.02.18.50.11        for \u003cmahesh.nidugala@gmail.com\u003e        (version=TLS1_2 cipher=ECDHE-ECDSA-AES128-GCM-SHA256 bits=128/128);        Thu, 02 Nov 2023 18:50:11 -0700 (PDT)',
            },
            {
                name: 'Received-SPF',
                value: 'pass (google.com: domain of jobs@basf.com designates 2a01:111:f400:fe1a::60c as permitted sender) client-ip=2a01:111:f400:fe1a::60c;',
            },
            {
                name: 'Authentication-Results',
                value: 'mx.google.com;       dkim=pass header.i=@basf.com header.s=selector2 header.b=A3sNA5XE;       arc=pass (i=1 spf=pass spfdomain=basf.com dmarc=pass fromdomain=basf.com);       spf=pass (google.com: domain of jobs@basf.com designates 2a01:111:f400:fe1a::60c as permitted sender) smtp.mailfrom=jobs@basf.com;       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=basf.com',
            },
            {
                name: 'ARC-Seal',
                value: 'i=1; a=rsa-sha256; s=arcselector9901; d=microsoft.com; cv=none; b=JXpu3Rt3lXi051EunDmppIGTy6tvjmaUBtRShUQA+egdkqQSIuWQuUzo8L5mn2sFYS450ueeyQX2eYsu98ng7FF0KeFcI//bk7Jku9jOHIT5HsU55mIyfETc3dR2bt+Ts9FX3SAcgY8syO/dGCmQxbCD9hP1s2quDThDXGaeyuY8yIN+31kGAePab9kB5PqQDg5ION7TZtQEu0tgvd6HE5ZTxMb04+IjDpAebWRvaa3QtIYwQKiFRCR52qCAryGL2hu10EVeonFDvnM1WnzCLnSt0oNEij9pX2b8cq2n3Y5NYOElntr4wSmUv+yfJm28i7ChV7dJcEkofSqUPTm9Ig==',
            },
            {
                name: 'ARC-Message-Signature',
                value: 'i=1; a=rsa-sha256; c=relaxed/relaxed; d=microsoft.com; s=arcselector9901; h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-AntiSpam-MessageData-ChunkCount:X-MS-Exchange-AntiSpam-MessageData-0:X-MS-Exchange-AntiSpam-MessageData-1; bh=RGS7LzjZtUjqHgnkALHkj2PVr0l70of4QpPH/upphnQ=; b=Aj6mo9q5Xj9dVC8jIDQswt3sEQGVXiVI0oHRHUtTHzdKZbypR0rUuhzH1NBzjoTA83B5kIrHJddzPf3xvHbk7cQyuZRbv7QUCgTfYcVSc2Dwm8KV9n1XYggNDw4HzqWxyr10mqPkq5V9DfnwaKEA/q7qk7ojRkN8RM6ZTSytKzH7KQgnkrk2h3syoNzqTOB/ko/9G8nNGRnE+HxDuDRJqrZjs5WmuqTUoIyg7TjKL9NkwECGxlFo9M0NTFoTaDYl7JhQa/RC+bOCSYi7p8egEROoPmXUHchXXwVo4pxou68u3zxI+a1Mwp6FcaXLOjKYnzhdKtQuN+nnJhyFP2gsfg==',
            },
            {
                name: 'ARC-Authentication-Results',
                value: 'i=1; mx.microsoft.com 1; spf=pass (sender ip is 141.6.2.43) smtp.rcpttodomain=gmail.com smtp.mailfrom=basf.com; dmarc=pass (p=reject sp=reject pct=100) action=none header.from=basf.com; dkim=none (message not signed); arc=none (0)',
            },
            {
                name: 'DKIM-Signature',
                value: 'v=1; a=rsa-sha256; c=relaxed/relaxed; d=basf.com; s=selector2; h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-SenderADCheck; bh=RGS7LzjZtUjqHgnkALHkj2PVr0l70of4QpPH/upphnQ=; b=A3sNA5XESyhqwsGM1ssrjo/S1MTybSzs8zvvMRQb3dbRwDrDTkLO6oYEP+/fE6UhoaFlTs3YLiP1vWTdfEexlYHk8fzJqpMgfoHjFb1S92QHrWH7iAco30udnQGTrLEu6re5TBoKAREBvMR32rUqxGHKJWNJ93L8pudPVOgqdyRc6j+4FHtNrg1JCrwRTx/1frCZgrqVaNEYZu3/vL99zQQDBn8lJwf2AZlMKtjaahj3HUpSwBovGdUhZmkwHtv8Y1uZmZcbqq3Q6/4DwaBUb5edO4hXSKd7h+sRQhRczfYFidVdLPjRGw21YlfOZ63o1IqHRhzQTz6tJrYMgCBSSg==',
            },
            {
                name: 'Received',
                value: 'from DUZPR01CA0213.eurprd01.prod.exchangelabs.com (2603:10a6:10:4b4::27) by AM0PR04MB6851.eurprd04.prod.outlook.com (2603:10a6:208:182::9) with Microsoft SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.6977.10; Fri, 3 Nov 2023 01:50:09 +0000',
            },
            {
                name: 'Received',
                value: 'from DB5PEPF00014B90.eurprd02.prod.outlook.com (2603:10a6:10:4b4:cafe::b8) by DUZPR01CA0213.outlook.office365.com (2603:10a6:10:4b4::27) with Microsoft SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.6954.22 via Frontend Transport; Fri, 3 Nov 2023 01:50:09 +0000',
            },
            {
                name: 'X-MS-Exchange-Authentication-Results',
                value: 'spf=pass (sender IP is 141.6.2.43) smtp.mailfrom=basf.com; dkim=none (message not signed) header.d=none;dmarc=pass action=none header.from=basf.com;',
            },
            {
                name: 'Received-SPF',
                value: 'Pass (protection.outlook.com: domain of basf.com designates 141.6.2.43 as permitted sender) receiver=protection.outlook.com; client-ip=141.6.2.43; helo=lin9703981.dmz.basf-ag.de; pr=C',
            },
            {
                name: 'Received',
                value: 'from lin9703981.dmz.basf-ag.de (141.6.2.43) by DB5PEPF00014B90.mail.protection.outlook.com (10.167.8.228) with Microsoft SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.6954.19 via Frontend Transport; Fri, 3 Nov 2023 01:50:09 +0000',
            },
            {
                name: 'Received',
                value: 'from smtp1.basf.net (smtp1.basf.net [10.4.50.43]) (using TLSv1.3 with cipher TLS_AES_256_GCM_SHA384 (256/256 bits)\t key-exchange X25519 server-signature RSA-PSS (4096 bits) server-digest SHA256) (No client certificate requested) by lin9703981.dmz.basf-ag.de (Postfix) with ESMTPS id 4SM3bN54pyzMqdfv for \u003cmahesh.nidugala@gmail.com\u003e; Fri,  3 Nov 2023 02:50:08 +0100 (CET)',
            },
            {
                name: 'Received',
                value: 'from basf.com (ze3ci.dmz.basf-ag.de [141.6.12.230]) by smtp1.basf.net (Postfix) with ESMTP id 4SM3bN3QSRzBQPkh for \u003cmahesh.nidugala@gmail.com\u003e; Fri,  3 Nov 2023 02:50:08 +0100 (CET)',
            },
            {
                name: 'Date',
                value: 'Fri, 3 Nov 2023 02:44:18 +0100 (CET)',
            },
            {
                name: 'From',
                value: '\u003cjobs@basf.com\u003e',
            },
            {
                name: 'X-BASF-SMTPOUT',
                value: 'true',
            },
            {
                name: 'Subject',
                value: 'Your application',
            },
            {
                name: 'To',
                value: '\u003cmahesh.nidugala@gmail.com\u003e',
            },
            {
                name: 'Message-ID',
                value: '\u003cADR48000001613843@basf.com\u003e',
            },
            {
                name: 'MIME-Version',
                value: '1.0',
            },
            {
                name: 'Importance',
                value: 'Normal',
            },
            {
                name: 'X-Priority',
                value: '3 (Normal)',
            },
            {
                name: 'X-Mailer',
                value: 'SAP Web Application Server 7.01',
            },
            {
                name: 'Content-Type',
                value: 'multipart/mixed; boundary="=_6CD24465CA51ED78E10000008D060CEA"',
            },
            {
                name: 'Return-Path',
                value: 'jobs@basf.com',
            },
            {
                name: 'X-EOPAttributedMessage',
                value: '0',
            },
            {
                name: 'X-MS-PublicTrafficType',
                value: 'Email',
            },
            {
                name: 'X-MS-TrafficTypeDiagnostic',
                value: 'DB5PEPF00014B90:EE_|AM0PR04MB6851:EE_',
            },
            {
                name: 'X-MS-Office365-Filtering-Correlation-Id',
                value: 'ff647d4c-cc66-4dd8-aba2-08dbdc0f35f8',
            },
            {
                name: 'X-MGBASF-authorized',
                value: 'FromDMZ',
            },
            {
                name: 'X-MG',
                value: 'BASF_O365_RELAYED',
            },
            {
                name: 'X-MG-SentBy-BASF',
                value: 'True',
            },
            {
                name: 'X-MG-Attachment',
                value: 'YES',
            },
            {
                name: 'X-Report-BASF-Outbound',
                value: 'True',
            },
            {
                name: 'X-MGBASF-SpamOverruled',
                value: 'True',
            },
            {
                name: 'X-MS-Exchange-SenderADCheck',
                value: '1',
            },
            {
                name: 'X-MS-Exchange-AntiSpam-Relay',
                value: '0',
            },
            {
                name: 'X-Microsoft-Antispam',
                value: 'BCL:0;',
            },
            {
                name: 'X-Microsoft-Antispam-Message-Info',
                value: 'JBUWBT1D7fnSSd6ofgd5/+kPoYglaq/6C2c8O0uT6W++wpdgGnxsqeXGEtcfgf6zF5WUQm6Lap8IiR5EBcessYLcfXTQRjE9B9wWIX9Nj0gB547TYMXaay9hBp4jtd3DPDpuXMPinqtvZk+hJQE4y17zVR58O5HWe2ATayMJ8Kp5raE2WfX6X6a2RY41eqByz12QAcG5nHc3v0xCqvziY5GrNqJ3uwEFWCAMNsWUJcNqE05o+Vufgku6amOFiiGBlVZin0oLq9jC1N4RKQqTMcH3E/YwlMzl1+mWQAMaMNlvwkoXVvZHUXRCLcfkDqwxCYgTvqDb+njpfH+D/sbvi7m53wCrYBBJO9unJ34gpK7PqE21wpY76aWFAqBQidADm3A491Ng1LLk8u0ZRN12K+Ku/G6JaJnxvo7TJ8x5hVlJkPtCr3UXtlG+m0w9vLWS+S7SUFkSF3OaFjZqyh1qAeaiShWwHUx2vbQ66aqHXefAsskiwCMDzVjYz6SekglWF7MAlBnb97eKH5H7ikkjX24SdruU+Ok7MBQG1NjvVYsyDr8uFbJlh76QLLJjkvTOod0PUwttJEnqTmseRE1+ZKl1255S9NEfloByArJekmmki8SQu2s0sPKs53TBfGZz2CP38jVP38t9hW6Qc+IWD/cm5PP3v/yQrxEZpWYJ1Xih3lny2s0GomS6mgVE88VtOkDINzhKVKEP6/4i5/JrgC1AiijhGdIZIEsPX9oIrkI9/3mnpFEfDGPATzo1UGAX7B8WXgOf4UQWvOEmJLl6XA==',
            },
            {
                name: 'X-Forefront-Antispam-Report',
                value: 'CIP:141.6.2.43;CTRY:DE;LANG:en;SCL:1;SRV:;IPV:NLI;SFV:NSPM;H:lin9703981.dmz.basf-ag.de;PTR:InfoDomainNonexistent;CAT:NONE;SFS:(13230031)(4636009)(136003)(346002)(39860400002)(376002)(396003)(230922051799003)(1800799009)(82310400011)(186009)(451199024)(64100799003)(40470700004)(46966006)(36840700001)(2616005)(36860700001)(40480700001)(47076005)(7696005)(44144004)(478600001)(356005)(81166007)(83380400001)(166002)(55016003)(3480700007)(6266002)(40460700003)(336012)(82960400001)(66574015)(21480400003)(956004)(2876002)(33656002)(86362001)(2906002)(41300700001)(19273905006)(28085005)(8676002)(5660300002)(8936002)(235185007)(7116003)(36756003)(70206006)(6666004)(6916009)(316002)(26005)(82740400003)(966005)(36900700001)(15669805003);DIR:OUT;SFP:1101;',
            },
            {
                name: 'X-OriginatorOrg',
                value: 'basf.com',
            },
            {
                name: 'X-MS-Exchange-CrossTenant-OriginalArrivalTime',
                value: '03 Nov 2023 01:50:09.0385 (UTC)',
            },
            {
                name: 'X-MS-Exchange-CrossTenant-Network-Message-Id',
                value: 'ff647d4c-cc66-4dd8-aba2-08dbdc0f35f8',
            },
            {
                name: 'X-MS-Exchange-CrossTenant-Id',
                value: 'ecaa386b-c8df-4ce0-ad01-740cbdb5ba55',
            },
            {
                name: 'X-MS-Exchange-CrossTenant-OriginalAttributedTenantConnectingIp',
                value: 'TenantId=ecaa386b-c8df-4ce0-ad01-740cbdb5ba55;Ip=[141.6.2.43];Helo=[lin9703981.dmz.basf-ag.de]',
            },
            {
                name: 'X-MS-Exchange-CrossTenant-AuthAs',
                value: 'Internal',
            },
            {
                name: 'X-MS-Exchange-CrossTenant-AuthSource',
                value: 'TreatMessagesAsInternal-DB5PEPF00014B90.eurprd02.prod.outlook.com',
            },
            {
                name: 'X-MS-Exchange-CrossTenant-FromEntityHeader',
                value: 'HybridOnPrem',
            },
            {
                name: 'X-MS-Exchange-Transport-CrossTenantHeadersStamped',
                value: 'AM0PR04MB6851',
            },
        ],
        body: {
            size: 0,
        },
        parts: [
            {
                partId: '0',
                mimeType: 'text/html',
                filename: '',
                headers: [
                    {
                        name: 'Content-Disposition',
                        value: 'inline',
                    },
                    {
                        name: 'Content-Type',
                        value: 'text/html; charset="iso-8859-1"',
                    },
                    {
                        name: 'Content-Transfer-Encoding',
                        value: 'quoted-printable',
                    },
                    {
                        name: 'Content-Description',
                        value: 'Your application',
                    },
                ],
                body: {
                    size: 4605,
                    data: 'PGh0bWw-PGhlYWQ-PG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBlIiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9SVNPLTg4NTktMSIgLz48L2hlYWQ-PGJvZHk-PGRpdiBjbGFzcz0iWVAxNC1DT1JSLVNUWUxFIj48ZGl2IGNsYXNzPSJwYWdlIiBpZD0iU1RBUlRTRUlURS0wMDEiPjxkaXYgY2xhc3M9IndpbiIgaWQ9Ik1BSU4tV0lORE9XIj48ZGl2IGNsYXNzPSJZUDE0LUNPUlItU1RZTEUiIGlkPSJTVUJKRUNULUVYVCI-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-PGI-WW91ciBhcHBsaWNhdGlvbiB3aXRoIEJBU0Y8L2I-Jm5ic3A7PC9kaXY-PC9kaXY-PGRpdiBjbGFzcz0iWVAxNC1DT1JSLVNUWUxFIiBpZD0iTUFJTi1FWFRFUk4iPjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-wqAmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj48c3Bhbj5EZWFyIE1yIE5pZHVnYWxhLDwvc3Bhbj4mbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj7CoCZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPlRoYW5rIHlvdSBmb3IgeW91ciBpbnRlcmVzdCBpbiBCQVNGLiZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-V2UgcmVjZWl2ZWQgeW91ciBhcHBsaWNhdGlvbiBvbiA8c3Bhbj4wOC4wOC4yMDIzPC9zcGFuPiBmb3IgdGhlIHBvc2l0aW9uIG9mIDxzcGFuPkludGVybnNoaXAgV2ViIERldmVsb3BtZW50IChtL2YvZCk8L3NwYW4-IGF0IDxzcGFuPkJBU0YgU0U8L3NwYW4-LiZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-WW91IGNhbiB1cGRhdGUgeW91ciBjYW5kaWRhdGUgcHJvZmlsZSBhdCBhbnkgdGltZSB1c2luZyBvdXIgb25saW5lIGFwcGxpY2F0aW9uIHBvcnRhbC4gWW91IGNhbiBhY2Nlc3MgdGhpcyB2aWEgdGhlIGludGVybmV0IGF0IDxhIGhyZWY9Imh0dHA6Ly93d3cuYmFzZi5jb20vY2FyZWVyL2xvZ2luIj5odHRwOi8vd3d3LmJhc2YuY29tL2NhcmVlci9sb2dpbjwvYT4uJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-wqAmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj5Zb3VyIHVzZXIgbmFtZSBpcyA8c3Bhbj5NQUhFU0hfTklEVUdBTEE8L3NwYW4-Jm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-wqAmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj5XZSB3aWxsIG5vdyBjYXJlZnVsbHkgcmV2aWV3IHlvdXIgYXBwbGljYXRpb24gYW5kIGNvbXBhcmUgeW91ciBxdWFsaWZpY2F0aW9ucyBhbmQgaW50ZXJlc3RzIHdpdGggdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgcG9zaXRpb24uJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-wqAmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj5Zb3Ugd2lsbCByZWNlaXZlIGEgcmVzcG9uc2UgZnJvbSB1cyBzaG9ydGx5LiZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-SWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucywgcGxlYXNlIGRvIG5vdCBoZXNpdGF0ZSB0byBjb250YWN0IHVzLiZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PC9kaXY-PGRpdiBjbGFzcz0iWVAxNC1DT1JSLVNUWUxFIiBpZD0iQ0hBTkdFQUJMRS1TRUNUSU9OLVQiPjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PC9kaXY-PGRpdiBjbGFzcz0iWVAxNC1DT1JSLVNUWUxFIiBpZD0iU0lHTkFUVVJFLUVNQUlMIj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj5Zb3VycyBzaW5jZXJlbHkmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj7CoCZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPkJBU0YgUmVjcnVpdGluZyBFdXJvcGUmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj7CoCZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-UGhvbmU6IDAwIDgwMCAzMyAwMCAwMCAzMywgRmF4OiAwMCA4MDAgMzMgMDAgMDAgMzQsIEUtbWFpbDogam9ic0BiYXNmLmNvbSZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPlBvc3RhbCBBZGRyZXNzOiBCQVNGIFNlcnZpY2VzIEV1cm9wZSBHbWJILCBQb3N0Ym94IDExIDAyIDQ4LCAxMDgzMiBCZXJsaW4sIEdlcm1hbnkmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj7CoCZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPjxiPkJBU0YgLSBXZSBjcmVhdGUgY2hlbWlzdHJ5PC9iPiZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBpZD0iVFQiPkJBU0YgU2VydmljZXMgRXVyb3BlIEdtYkg8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIGlkPSJUVCI-TmFnbGVyc3RyYcOfZSA0LTUsIDEwMjQ1IEJlcmxpbiwgR2VybWFueTwvZGl2PjxkaXYgY2xhc3M9InBhciIgaWQ9IlRUIj5Db21wYW5pZXMnIFJlZ2lzdGVyOiBBbXRzZ2VyaWNodCBCZXJsaW4tQ2hhcmxvdHRlbmJ1cmcgSFJCIDk3MTQwPC9kaXY-PGRpdiBjbGFzcz0icGFyIiBpZD0iVFQiPkNoYWlybWFuIG9mIHRoZSBTdXBlcnZpc29yeSBCb2FyZDogRGFuaWVsIERvcm5idXNjaDwvZGl2PjxkaXYgY2xhc3M9InBhciIgaWQ9IlRUIj5NYW5hZ2luZyBEaXJlY3RvcjogSnVlcmdlbiBaaWVya2U8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj7CoCZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPjxhIGhyZWY9Ind3dy5iYXNmLmNvbS9jYXJlZXIiPnd3dy5iYXNmLmNvbS9jYXJlZXI8L2E-Jm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-wqAmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj7CoCZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-wqAmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj7CoCZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-wqAmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj7CoCZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-wqAmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj7CoCZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-wqAmbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPSJwYXIiIHN0eWxlPSJsaW5lLWhlaWdodDogNC4yM21tIj7CoCZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9InBhciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiA0LjIzbW0iPsKgJm5ic3A7PC9kaXY-PGRpdiBjbGFzcz0icGFyIiBzdHlsZT0ibGluZS1oZWlnaHQ6IDQuMjNtbSI-wqAmbmJzcDs8L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2JvZHk-PC9odG1sPg==',
                },
            },
            {
                partId: '1',
                mimeType: 'application/pdf',
                filename: 'Your application.PDF',
                headers: [
                    {
                        name: 'Content-Disposition',
                        value: 'attachment; filename="Your application.PDF"',
                    },
                    {
                        name: 'Content-Type',
                        value: 'application/pdf; name="Your application.PDF"',
                    },
                    {
                        name: 'Content-Transfer-Encoding',
                        value: 'base64',
                    },
                    {
                        name: 'Content-Description',
                        value: 'Your application',
                    },
                ],
                body: {
                    attachmentId:
                        'ANGjdJ-XGBWmc7dLlf85nxLCWRFxPr7jU3eTsigMFvQ-l6v5Vl5DOo4DE1aJvEIeWBUPxPzcI3RMClTsRrUTgHx7gv4mhyN4n-DGTYwnP7mcXPj1IStbd71jpsaGZOU02f_OAc5xkmRMyqmSRA2Pj7tZbnnvalwIkRIME_vmcEnn6tLr3NzMcYcnfRV2sP-cNuyhkd6HhrLBjJjIuf_gX2tU67yV6fMcrStprLhj0sach-ozCbO46wUXG-gyjuoKGZLIkZtNd3f8T8Z9mQf8jQ9sA0q93ojDjQZN2UriOYmsTiOSdK2ORB1SWYqVjmTyseHg3qzEgmXMrV2Sv7OigXl_VSh43RZx5VKP_uWFZUiAdiM0L4cSAcHus1hNqlG9PQlkkZBAyFyU7xb4Q2iH',
                    size: 426019,
                },
            },
        ],
    },
    sizeEstimate: 599195,
    historyId: '585590',
    internalDate: '1698975858000',
};

const filteredMessageResponse = [
    "Dear Mahesh Nidugala , Thank you for your recent interest in Deutsche Bank's recruitment process with relation to Working Student/ Werkstudent (m/f/x) in Technology, Data and Innovation at the Berlin Technology We have received a large number of applications for this position and unfortunately you have not been selected for an interview at this stage. However, we are keen to maintain contact with you, and encourage you to apply for future employment opportunities with Deutsche Bank. Stay up to date on our latest job postings by visiting: db.com/careers. You can also stay in the know through our various social media channels - LinkedIn, Facebook, Twitter and Glassdoor. Our best wishes for your future career. Yours sincerely, Deutsche Bank Talent Sourcing This email was intended for mahesh.nidugala@gmail.com This e-mail may contain confidential and/or privileged information. If you are not the intended recipient (or have received this e-mail in error) please notify the sender immediately and destroy this e-mail. Any unauthorized copying, disclosure or distribution of the material in this e-mail is strictly forbidden. · .",
];

module.exports = {
    emailMessageWithOutParts,
    emailMessageResponse,
    emailMessageWithParts,
    filteredMessageResponse,
};
