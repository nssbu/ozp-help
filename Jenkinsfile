pipeline {
    agent {
        label 'KZ01_TI-141_OZP_CentOS'
    }
    stages {
        stage('Clear the workspace') {
            steps {
                sh 'sudo rm -rf *'
            }
        }
        stage('Checkout Repo') {
            steps {
                git url: 'http://www.github.com/mark-betters-ozp-forks/ozp-help.git', branch: 'master'
            }
        }
        stage('Build') {
            steps {
                sh '''
                  export npm_config_cache=$(mktemp -d)
                  sudo npm config set cache $npm_config_cache --global
                  npm install bower gulp
                  npm install --cache $npm_config_cache; npm run build; npm run tarDistDate
                  rm -rf $npm_config_cache
                  mv *.tar.gz help.tar.gz
                '''
            }
        }
    }
}