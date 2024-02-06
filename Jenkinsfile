
pipeline {
    agent any
   
   environment {
        HEROKU_API_KEY = credentials('heroku-api-key')
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
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku" auth:token:set $HEROKU_API_KEY' 
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku" auth:whoami'
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku" git:remote -a online-auth-service'
                        bat 'git push heroku online-auth-service-deployment:main'
                      
                    }
                     

                }
            }
        }
       
    }
}
