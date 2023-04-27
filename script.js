let jobDiv = document.getElementById("unison-job-openings");

async function fetchJobOpenings() {
  const res = await fetch(
    "https://api.ashbyhq.com/posting-api/job-board/UNISON"
  );
  const data = await res.json();

  data.jobs.map((job) => {
    let element = document.createElement("div");
    let jobParagraph = document.createElement("p");
    let link = document.createElement("a");

    link.href = job.jobUrl;
    link.target = "_blank";
    link.innerText = "→ Read More";
    jobParagraph.innerText = `${job.title}\nSan Francisco, CA / Mountain View, CA\n`;

    element.appendChild(jobParagraph);
    element.appendChild(link);
    jobDiv.appendChild(element);
  });
}

window.onload = fetchJobOpenings;
