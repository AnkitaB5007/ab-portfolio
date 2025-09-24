pipeline {
    agent { label 'dev' }

    environment {
        PROJECT_NAME   = "ab-portfolio"
        DOCKER_REPO    = "anbe00007/ab-portfolio"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: "https://github.com/AnkitaB5007/ab-portfolio.git", branch: "master"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh "npm ci"
                echo "Dependencies installed from package-lock.json"
            }
        }

        stage('Tests') {
            steps {
                echo "Running tests..."
                // Example: sh "npm test"
            }
        }

        stage('Build') {
            steps {
                sh "npm run build"
                echo "Build completed!"
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    sh "docker build -f Dockerfile-multi-serve -t ${DOCKER_REPO}:${BUILD_NUMBER} ."
                    sh "docker tag ${DOCKER_REPO}:${BUILD_NUMBER} ${DOCKER_REPO}:latest"
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: "dockerHubCreds",
                    passwordVariable: "dockerHubPass",
                    usernameVariable: "dockerHubUser"
                )]) {
                    script {
                        echo "Logging into DockerHub..."
                        sh "echo ${dockerHubPass} | docker login -u ${dockerHubUser} --p ${dockerHubPass}"

                        echo "Pushing images..."
                        sh "docker push ${DOCKER_REPO}:${BUILD_NUMBER}"
                        sh "docker push ${DOCKER_REPO}:latest"
                        
                        echo "Images pushed successfully to DockerHub."
                    }
                }
            }
        }

        stage('Package') {
            steps {
                echo "Archiving build artifacts..."
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }
}
