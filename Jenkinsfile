
pipeline {
    agent any
   
   environment {
        HEROKU_API_KEY = credentials('heroku-api-key')
        HEROKU_APP_NAME = 'online-auth-service'
        HEROKU_CLI_PATH = '"C:\\Program Files\\Heroku\\bin\\heroku"'
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
                script {
                    withCredentials([string(credentialsId: 'heroku-api-key', variable: 'HEROKU_API_KEY')]) {
                       bat '$HEROKU_CLI_PATH auth:token:set $HEROKU_API_KEY' 
                       bat '$HEROKU_CLI_PATH auth:whoami'
                    }

                    bat '$HEROKU_CLI_PATH git:remote -a $HEROKU_APP_NAME'
                    bat '$HEROKU_CLI_PATH git add .'
                    bat '$HEROKU_CLI_PATH git commit -m "Automated deployment"'
                    bat '$HEROKU_CLI_PATH it push heroku $HEROKU_APP_NAME:main'

                }
            }
        }
       
    }
}
