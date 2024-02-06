
pipeline {
    agent any
   

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
                    
                    git checkout online-auth-service-deployment
                    git push --verbose origin online-auth-service-deployment
                      
                    
                     

                }
            }
        }
       
    }
}
