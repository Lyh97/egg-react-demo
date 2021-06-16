@Library('jenkins-shared-library-devops')
pipeline {
    agent any
    stages {
        stage('Notify') { steps { script { slackNotifier.jobInform() } } }
        stage('devDeploy') {
            when {
                branch 'PR-*'
            }
            steps {
                script {
                    nodejs('nodejs-12') {
                            sh '''
                                console.log("1233333333")
                            '''
                    }
                }
            }
        }
    }
}