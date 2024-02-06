
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
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku" auth:token'                  
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku" container:login'
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku" container:push web --app online-auth-service'
                        bat '"C:\\Program Files\\Heroku\\bin\\heroku" container:release web --app online-auth-service' 
                    }

                }
            }
        }
       
    }
}
