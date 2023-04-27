let jobDiv = document.getElementById("unison-job-openings-children");

async function fetchJobOpenings() {
  const res = await fetch(
    "https://api.ashbyhq.com/posting-api/job-board/UNISON"
  );
  const data = await res.json();

  data.jobs.map((job) => {
    let element = document.createElement("a");
    element.href = job.jobUrl;
    element.target = "_blank";
    element.innerText = `${job.title}\nSan Francisco, CA / Mountain View, CA`;
    jobDiv.appendChild(element);
  });
}

window.onload = fetchJobOpenings;
