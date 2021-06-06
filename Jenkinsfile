@Library('jenkins-shared-library-devops') _

def vaultConfig = vault.getConfig()
def iamApiKey = vault.iamapiKey()
def clusterId = vault.clusterId()

def secretBasePath = "secret%2Fcpds/common/eas-cli"
def secretList = ["SSO_TOKEN"]

pipeline {
    stages {
        stage('Notify') { steps { script { slackNotifier.jobInform() } } }
        stage('devDeploy') {
            when {
                branch 'PR-*'
            }
            steps {
                script {
                    nodejs('nodejs-12') {
                        applicationSecrets = vault.applicationSecrets(secretBasePath + "/dev", 2, secretList)
                        withVault([configuration: vaultConfig, vaultSecrets: [iamApiKey, clusterId, applicationSecrets]]) {
                            sh '''
                                console.log("12333")
                            '''
                        }
                    }
                }
            }
            post { always { script { slackNotifier.getStageResult("${currentBuild.currentResult}") } } }
        }
    }
    post { always { script { slackNotifier.pipelineResult("${currentBuild.currentResult}") } } }
}