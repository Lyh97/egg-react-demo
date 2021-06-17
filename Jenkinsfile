pipeline {
    agent any

    //global env.
    environment {
        PROJECT_NAME = 'cpds-eas-cli'
    }

    stages {
        stage('devDeploy') {
            steps {
                script {
                    nodejs('nodejs-12') {
                        sh '''
                            npm -version
                        '''
                    }
                }
            }
        }
    }
}