const jobDiv = document.getElementById("unison-job-openings-children");
console.log(jobDiv);
async function fetchJobOpenings() {
  const res = await fetch(
    "https://api.ashbyhq.com/posting-api/job-board/UNISON"
  );
  const data = await res.json();
  console.log(data);
  data.jobs.map((job) => {
    let element = document.createElement("p");
    element.innerText = `${job.title}\nSan Francisco, CA / Mountain View, CA`;
    jobDiv.appendChild(element);
    console.log("after" + jobDiv);
  });
}

window.onload = fetchJobOpenings;
