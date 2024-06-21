# Getting Started with Create React App

This project is integrated with Open Source JSON API builder at https://jsonplaceholder.typicode.com/guide/ and uses the following:
1. Context API and Material UI
2. Defines the steps to containerize and deploy the application to AWS

Run the following commands to run the project:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


Setting up a continuous deployment pipeline for deploying and maintaining a frontend application on a Kubernetes cluster using AWS services involves several steps. Here's a detailed guide:

### `Set up CI/CD Pipeline:`

1. Choose a CI/CD tool such as GitHub Actions or Jenkins.
2. Connect your source code repository (e.g., GitHub) to the CI/CD tool.
3. Configure the pipeline to trigger on changes to the frontend application code.
4. Define the stages of the pipeline: build, test, deploy.
5. Integrate any necessary testing frameworks (e.g., Jest for JavaScript testing).

### `Build, Test, and Deploy:`

1. Upon code changes, the CI/CD pipeline should automatically trigger.
2. The pipeline will clone the repository, install dependencies, and build the frontend application.
3. Execute automated tests to ensure the application functions correctly.
4. If tests pass, the built artifacts are ready for deployment.

### `Create Kubernetes Cluster using EKS:`

1. Log in to the AWS Management Console.
2. Navigate to the Amazon EKS service.
3. Click on "Create Cluster" and follow the wizard.
4. Configure cluster settings such as name, region, instance type, and node capacity.
5. Once created, download the kubeconfig file to interact with the cluster.

### `Deploy Application using Kubernetes Manifests or Helm Charts:`

1. Create Kubernetes manifests (YAML files) or Helm charts for deploying the frontend application.
2. Manifests/charts should define resources like Deployments, Services, ConfigMaps, and Secrets.
3. Apply the manifests/charts to the Kubernetes cluster using kubectl or Helm CLI.


### `Configure LoadBalancer Service:`

1. In the Kubernetes manifest, define a Service of type LoadBalancer.
2. Kubernetes will interact with AWS to provision an Elastic Load Balancer (ELB).
3. The LoadBalancer will route traffic to the frontend application pods running in the cluster.


### `Implement Monitoring and Logging using AWS CloudWatch:`

1. Navigate to the AWS Management Console.
2. Open the CloudWatch service.
3. Set up logging for the frontend application pods by configuring log groups.
4. Configure CloudWatch Container Insights to collect metrics from the Kubernetes cluster.


### `Track Metrics and Configure Alerting:`

1. Monitor metrics such as CPU utilization, memory usage, and response time.
2. Create CloudWatch Alarms to alert on threshold breaches or anomalies.
3. Define alert actions like sending notifications via SNS or triggering AWS Lambda functions.
