
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
                     bat 'git remote add origin https://github.com/infomediadesign/sad-01-24-group-2-jobpilot.git'
                     bat 'git push origin online-auth-service-deployment'
                     
                }
            }
        }
       
    }
}
