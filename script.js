const fetchJobOpenings = () => {
  const jobDiv = document.getElementById("unison-job-openings");
  const placeholder = document.getElementById("unison-placeholder");

  if (!jobDiv) {
    console.error(
      'Please add an element with this specific id: "unison-job-openings"'
    );
  }

  try {
    fetch("https://api.ashbyhq.com/posting-api/job-board/UNISON")
      .then((res) => res.json())
      .then((data) => {
        data.jobs.map((job) => {
          const element = document.createElement("div");
          const jobParagraph = document.createElement("h2");
          const link = document.createElement("a");
          const span = document.createElement("span");

          link.href = job.jobUrl;
          link.target = "_blank";
          link.innerText = "→ Read More";
          span.style.color = "#2e3192";
          jobParagraph.innerText = `${job.title}\nSan Francisco, CA / Mountain View, CA\n`;

          if (placeholder) {
            placeholder.remove();
          }

          span.appendChild(link);
          element.appendChild(jobParagraph);
          element.appendChild(span);
          jobDiv.appendChild(element);
        });
      });
  } catch (e) {
    console.error(e.message);
  }
};

window.onload = fetchJobOpenings;
window.onunload = () => console.log("unload");
