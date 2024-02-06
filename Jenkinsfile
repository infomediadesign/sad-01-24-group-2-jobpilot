
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
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku"  auth:token:set $HEROKU_API_KEY' 
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku" auth:whoami'    
                    }
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku" heroku git:remote -a online-auth-service'
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku" git add .'
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku" git commit -m "Automated deployment"'
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku" git push heroku online-auth-service-deployment:main'
                  

                }
            }
        }
       
    }
}
