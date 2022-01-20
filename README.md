# API Service - Questions & Answers
<br />
<p align="center">
  <h1 align="center">Alligator API System Design</h1>

  <p align="center">
    Custom-built RESTful API to support server and database operations for a high-end fashion website that can scale to meet the demands of production traffic.

# About
I was tasked with re-engineering the backend of the "Ratings & Reviews" service of a e-commerce website frontend. To accomplish this, I:
  * Constructed RESTful API to handle requests to a database system of my own choosing
  * Performed an ETL (Extract, Transform, Load) process on a raw data set consisting of over twelve million records
  * Designed and build an API server to provide data to the client in the format specified by the API documentation
  * Optimized database and query methods for speed and response
  * Deployed to the cloud using AWS
  * Stress tested all API routes, checking for RPS (requests per second), latency, and error rate

The final product, when tested with <a href="https://loader.io">loader.io</a> with a maximum of 600 users per second, registered an average response time of 12 ms with a 0.0% error rate.

![](./loaderData.png)


# Stack

<table>
  <tbody>
    <tr>
      <th>Programming Languages</th>
      <td>
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
        <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Tools & Technologies</th>
      <td>
        <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?&style=for-the-badge"/>
        <img alt="MongoDB" src ="https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465/>
      </td>
    </tr>
    <tr>
      <th>Utilities</th>
      <td>
        <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" />
        <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
      </td>
    </tr>
     <tr>
      <th>Workflow</th>
      <td>
        <img alt="Github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
        <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/>
        <img alt="Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Deployment</th>
      <td>
        <img alt="AWS" src="https://img.shields.io/badge/AWS-%23FF9900.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white"/>
      </td>
    </tr>
  </tbody>
</table>

# Workflow
Our team used Agile workflow for this project.

## Trello
A Trello board was used to create and track tickets. We held daily standup meetings to discuss accomplishments, challenges, and upcoming tickets. We utilitized Discord in order to maintain effective remote collaboration and allow for quick communication when necessary.

## Version Control
We utilized Git Feature Branch workflow.
