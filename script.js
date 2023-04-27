const jobDiv = document.getElementById("unison-job-openings");

async function fetchJobOpenings() {
  const res = await fetch(
    "https://api.ashbyhq.com/posting-api/job-board/UNISON"
  );
  const data = await res.json();

  data.jobs.map((job) => {
    const element = document.createElement("div");
    const jobParagraph = document.createElement("p");
    const link = document.createElement("a");

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
