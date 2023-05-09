function includeNavbar() {
  const navbarElement = document.getElementById("navbar");
  if (navbarElement) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        navbarElement.innerHTML = this.responseText;
      }
    };
    xhr.open("GET", "../pages/navbar.html", true);
    xhr.send();
  }
}

var title = [
  "Student Researcher, 2023",
  "Internship Machine Learning",
  "IT-Spezialist / Fachinformatiker für Systemintegration (all genders)",
  "Software Developer / Softwareentwickler (m/w/d) (Java, Kotlin, C)",
  "Entwicklungsingenieur",
  "Praktikum im Software Development (m/w/d)",
  "Werkstudent Software-Testing (m/w/d)",
  "Senior Digital Creative Concept mit fachlicher Teamführung - für dm-drogerie markt",
  "IT-Systemelektroniker/ Fernmeldetechniker/ Mechatroniker (m/w/d) für IT-Netzinfrastruktur",
  "Software Engineer",
  "Software Developer",
  "Full Stack Developer",
  "Front-end Developer",
  "Back-end Developer",
  "Mobile Application Developer",
  "DevOps Engineer",
  "Quality Assurance Engineer",
  "Software Architect",
  "Technical Lead",
  "Project Manager",
  "Technical Product Manager",
  "Data Scientist",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Cloud Engineer",
  "Site Reliability Engineer",
  "Security Engineer",
  "Database Administrator",
  "Technical Writer",
  "Marketing Manager",
  "Graphic Designer",
  "Sales Representative",
  "Customer Service Specialist",
  "Human Resources Coordinator",
  "Content Writer",
  "Project Manager",
  "Accountant",
  "Web Developer",
  "Data Analyst",
  "Social Media Coordinator",
  "Operations Manager",
  "Business Analyst",
  "Quality Assurance Analyst",
  "Administrative Assistant",
  "IT Support Specialist",
  "Product Manager",
  "Financial Analyst",
  "Executive Assistant",
];

var positionType = ["Full-Time", "Part-Time", "Internship", "Working Student"];

var jobDescription = [
  [
    "Assist in the development and execution of research projects",
    "Collect and analyze data using various research methods and tools",
    "Collaborate with other researchers and stakeholders to achieve project objectives",
    "Attend and participate in research meetings, seminars, and conferences",
  ],
  [
    "Develop and implement machine learning models to solve business problems",
    "Collaborate with other team members to integrate machine learning models into existing systems",
    "Conduct data analysis and feature engineering to prepare data for machine learning models",
    "Communicate results and findings to stakeholders and team members",
  ],
  [
    "Plan, install, and configure computer systems and networks for organizations",
    "Monitor and maintain computer systems and networks to ensure optimal performance and security",
    "Troubleshoot and resolve technical issues related to computer systems and networks",
    "Maintain documentation and inventory of computer systems and network components",
  ],
  [
    "Develop, test, and maintain software applications using programming languages such as Java, Kotlin, or C",
    "Collaborate with other team members to design and implement software solutions that meet business requirements",
    "Write clean, efficient, and well-documented code",
    "Stay up-to-date with emerging trends and technologies in software development",
  ],
  [
    "Design and develop new products and technologies",
    "Conduct feasibility studies and cost analysis to assess the viability of new products and technologies",
    "Test and evaluate prototypes to ensure they meet design specifications",
    "Document and present findings and recommendations to stakeholders and team members",
  ],
  [
    "Develop and test software applications",
    "Collaborate with other team members to design and implement software solutions",
    "Write clean, efficient, and well-documented code",
  ],
  [
    "Develop and execute test plans and test cases",
    "Collaborate with other team members to identify and resolve software defects",
    "Document and report software defects and issues",
  ],
  [
    "Lead and manage a team of creative professionals",
    "Develop and implement digital creative concepts and campaigns",
    "Collaborate with other departments and stakeholders to ensure creative solutions meet business objectives",
  ],
  [
    "Install, configure, and maintain IT network infrastructure components such as servers, routers, and switches",
    "Troubleshoot and resolve technical issues related to IT network infrastructure",
    "Conduct routine maintenance and upgrades to ensure optimal performance and security",
  ],
  [
    "Develop, test, and maintain software applications using various programming languages and technologies",
    "Collaborate with other team members to design and implement software solutions",
    "Write clean, efficient, and well-documented code",
  ],
  [
    "Develop and maintain both front-end and back-end components of web applications",
    "Collaborate with other team members to design and implement software solutions",
    "Write clean, efficient, and well-documented code",
  ],
];

var urls = [
  "https://careers.google.com/jobs/results/122318656848700102-student-researcher-2023/?src=Online%2FLinkedIn%2Flinkedin_us&utm_campaign=contract&utm_medium=jobposting&utm_source=linkedin",
  "https://karriere.berlin-airport.de/job/BER-IT-Systemelektroniker-Fernmeldetechniker-Mechatroniker-%28mwd%29-f%C3%BCr-IT-Netzinfrastruktur-4924/917141401/",
  "https://keeunit.onapply.de/details/185731.html?source=careerSiteWidget",
  "https://jobs.check24.de/en/jobs/java-development/61748-4418-java-backend-entwickler-mwd-kfz-versicherungen/?agid=627",
  "https://careers.google.com/jobs/results/122318656848700102-student-researcher-2023/?src=Online%2FLinkedIn%2Flinkedin_us&utm_campaign=contract&utm_medium=jobposting&utm_source=linkedin",
  "https://karriere.berlin-airport.de/job/BER-IT-Systemelektroniker-Fernmeldetechniker-Mechatroniker-%28mwd%29-f%C3%BCr-IT-Netzinfrastruktur-4924/917141401/",
  "https://keeunit.onapply.de/details/185731.html?source=careerSiteWidget",
  "https://jobs.check24.de/en/jobs/java-development/61748-4418-java-backend-entwickler-mwd-kfz-versicherungen/?agid=627",
  "https://careers.google.com/jobs/results/122318656848700102-student-researcher-2023/?src=Online%2FLinkedIn%2Flinkedin_us&utm_campaign=contract&utm_medium=jobposting&utm_source=linkedin",
  "https://karriere.berlin-airport.de/job/BER-IT-Systemelektroniker-Fernmeldetechniker-Mechatroniker-%28mwd%29-f%C3%BCr-IT-Netzinfrastruktur-4924/917141401/",
  "https://keeunit.onapply.de/details/185731.html?source=careerSiteWidget",
  "https://jobs.check24.de/en/jobs/java-development/61748-4418-java-backend-entwickler-mwd-kfz-versicherungen/?agid=627",
  "https://careers.google.com/jobs/results/122318656848700102-student-researcher-2023/?src=Online%2FLinkedIn%2Flinkedin_us&utm_campaign=contract&utm_medium=jobposting&utm_source=linkedin",
  "https://karriere.berlin-airport.de/job/BER-IT-Systemelektroniker-Fernmeldetechniker-Mechatroniker-%28mwd%29-f%C3%BCr-IT-Netzinfrastruktur-4924/917141401/",
  "https://keeunit.onapply.de/details/185731.html?source=careerSiteWidget",
  "https://jobs.check24.de/en/jobs/java-development/61748-4418-java-backend-entwickler-mwd-kfz-versicherungen/?agid=627",

];

function createGrid(numRows) {
  const numCols = 1;
  const containerWidth = 100;
  const containerHeight = 200;

  const searchResultsDiv = document.getElementById("search-results");
  searchResultsDiv.innerHTML = "";

  for (let i = 0; i < numRows; i++) {
    var rand = Math.floor(Math.random() * positionType.length);
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.style.display = "flex";
    rowDiv.style.justifyContent = "space-between";
    rowDiv.style.textAlign = "center";

    for (let j = 0; j < numCols; j++) {
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("container");
      containerDiv.style.width = containerWidth + "%";
      containerDiv.style.height = containerHeight + "px";
      containerDiv.style.backgroundColor = "var(--blue)";
      containerDiv.style.margin = "20px 20px";
      containerDiv.style.borderRadius = "20px";
      containerDiv.style.display = "flex";
      containerDiv.style.flexDirection = "row";
      containerDiv.style.justifyContent = "center";

      // Create a text div element and add it to containerDiv
      const textDiv = document.createElement("div");
      textDiv.style.width = "80%";
      textDiv.style.display = "flex";
      textDiv.style.marginLeft = "20px";
      textDiv.style.paddingTop = "10px";
      textDiv.style.paddingBottom = "20px";
      textDiv.style.justifyContent = "left";
      textDiv.style.alignItems = "left";
      textDiv.style.color = "var(--white)";
      textDiv.style.display = "flex";
      textDiv.style.flexDirection = "column";

      const line3 = document.createElement("div");
      line3.style.fontSize = "24px";
      line3.style.textAlign = "left";
      line3.textContent = title[i];
      textDiv.appendChild(line3);

      const line2 = document.createElement("div");
      line2.style.fontSize = "18px";
      line2.style.textAlign = "left";
      line2.textContent = positionType[rand];
      textDiv.appendChild(line2);

      const line1 = document.createElement("div");
      line1.style.fontSize = "14px";
      line1.style.textAlign = "left";
      line1.textContent = "Responsibilities";
      textDiv.appendChild(line1);

      const list = document.createElement("ul");

      const internshipResponsibilities = jobDescription[i];

      for (let j = 0; j < internshipResponsibilities.length; j++) {
        const listItem = document.createElement("li");

        listItem.textContent = internshipResponsibilities[j];
        listItem.style.textAlign = "left";
        list.appendChild(listItem);
      }
      textDiv.appendChild(list);

      containerDiv.appendChild(textDiv);

      const lineDiv = document.createElement("div");
      lineDiv.style.width = "1px";
      lineDiv.style.display = "flex";
      lineDiv.style.height = "100%";
      lineDiv.style.backgroundColor = "var(--white)";
      lineDiv.style.alignSelf = "center";
      lineDiv.style.marginLeft = "auto"; // Add this line
      lineDiv.style.marginRight = "0%"; // Add this line
      containerDiv.appendChild(lineDiv);

      const buttonContainerDiv = document.createElement("div");
      buttonContainerDiv.style.width = "20%"; // Add this line
      buttonContainerDiv.style.display = "flex";
      buttonContainerDiv.style.flexDirection = "column";
      buttonContainerDiv.style.justifyContent = "center";
      buttonContainerDiv.style.alignItems = "center";

      const button1 = document.createElement("button");
      button1.textContent = "Save Job";
      button1.style.margin = "10px 10px";
      button1.style.width = "90%";
      button1.style.height = "50%";
      button1.style.padding = "10px 10px";
      button1.style.backgroundColor = "var(--white)";
      button1.style.color = "var(--blue)";
      button1.style.border = "none";
      button1.style.borderRadius = "10px";
      button1.style.cursor = "pointer";
      button1.onclick = SaveJob(title[i], positionType[rand]);
      buttonContainerDiv.appendChild(button1);

      const button2 = document.createElement("button");
      button2.textContent = "Apply Now";
      button2.style.width = "90%";
      button2.style.height = "50%";
      button2.style.margin = "10px 10px";
      button2.style.padding = "10px 10px";
      button2.style.backgroundColor = "var(--white)";
      button2.style.color = "var(--blue)";
      button2.style.border = "none";
      button2.style.borderRadius = "10px";
      button2.style.cursor = "pointer";
      button2.onclick = openJob(urls[i]);
      buttonContainerDiv.appendChild(button2);

      containerDiv.appendChild(buttonContainerDiv);

      rowDiv.appendChild(containerDiv);
    }

    searchResultsDiv.appendChild(rowDiv);
  }
}

function SaveJob(title, positionType, jobDescription) {
  // Save the job data to local storage
  localStorage.setItem("title", title);
  localStorage.setItem("positionType", positionType);
  localStorage.setItem("jobDescription", JSON.stringify(jobDescription));

  // Show a confirmation message to the user
  console.log("job saved");
}

function openJob(urls){
  // window.location.href = urls;
}

// JavaScript code in index.html

function searchJobs() {
  const searchQuery = document.getElementById("search-query").value;

  // Make an AJAX request to the PHP file that will call the LinkedIn API
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "search_jobs.php?q=" + searchQuery);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      displaySearchResults(response);
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.send();
}

function displaySearchResults(response) {
  // Process the API response and display the results in the HTML page
  const results = response.elements;
  const list = document.getElementById("search-results");
  list.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    const job = results[i];
    const title = job.title.text;
    const description = job.description.text;

    const listItem = document.createElement("li");
    const titleElement = document.createElement("h3");
    const descriptionElement = document.createElement("p");

    titleElement.textContent = title;
    descriptionElement.textContent = description;

    listItem.appendChild(titleElement);
    listItem.appendChild(descriptionElement);

    list.appendChild(listItem);
  }
}
