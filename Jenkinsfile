
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
                        bat 'git remote -v'
                        bat 'git status'
                        bat 'git add .'
                        bat 'git commit -m "Automated deployment"'
                        bat 'git checkout online-auth-service-deployment'
                        bat 'git pull'
                        bat 'GIT_TRACE=1 git push heroku online-auth-service-deployment:main'
                        bat 'git push heroku online-auth-service-deployment:main'
                      
                    }
                     

                }
            }
        }
       
    }
}
