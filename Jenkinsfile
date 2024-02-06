
pipeline {
    agent any
    environment {
        HEROKU_API_KEY = credentials('heroku-api-key')
        GOOGLE_CALLBACK_URL='https://online-auth-service-0b73a49cb2ea.herokuapp.com/api/auth/google/callback'
        GOOGLE_CLIENT_SECRET='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'
        GOOGLE_USER_INFO_URL='https://www.googleapis.com/oauth2/v1/userinfo'
        LOG_LEVEL='debug'
        LOG_MAX_DAYS'30',
        MONGODB_CLUSTER_URL='clusterbraille.u3wyeru.mongodb.net/?retryWrites=true&w=majority',
        MONGODB_DATABASE='db_jobpilot',
        MONGODB_PASSWORD='Heidelberg23',
        MONGODB_USERNAME='AppBraille23'
    }

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
             withCredentials([string(credentialsId: 'heroku-api-key', variable: 'HEROKU_API_KEY')]) {
                        bat 'heroku login -i'
                    }
            }
        }
       
    }
}
