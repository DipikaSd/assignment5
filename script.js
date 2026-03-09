const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

const container = document.getElementById("issuesContainer");

async function loadIssues(type="all"){

setActiveTab(type);

const res = await fetch(API);
const result = await res.json();

let issues = result.data;

if(type === "open"){
issues = issues.filter(i => i.status === "open");
}

if(type === "closed"){
issues = issues.filter(i => i.status === "closed");
}

displayIssues(issues);

document.getElementById("totalIssues").innerText = issues.length;

}
function setActiveTab(type){

const buttons = document.querySelectorAll(".tabBtn");

buttons.forEach(btn=>{
btn.classList.remove("bg-purple-600","text-white");
btn.classList.add("border");
});

if(type === "all"){
document.getElementById("allBtn").classList.add("bg-purple-600","text-white");
}

if(type === "open"){
document.getElementById("openBtn").classList.add("bg-purple-600","text-white");
}

if(type === "closed"){
document.getElementById("closedBtn").classList.add("bg-purple-600","text-white");
}

}



function displayIssues(issues){

const container = document.getElementById("issuesContainer");
container.innerHTML = "";

document.getElementById("totalIssues").innerText = issues.length;

issues.forEach(issue => {

const border =
issue.status === "open"
? "border-t-4 border-green-500"
: "border-t-4 border-purple-500";

const card = document.createElement("div");

card.className = `bg-white p-4 rounded shadow cursor-pointer ${border}`;

card.innerHTML = `

<h3 class="font-bold mb-2">${issue.title}</h3>

<p class="text-sm text-gray-500 mb-2">
${issue.description}
</p>

<p class="text-sm">Status: ${issue.status}</p>
<p class="text-sm">Author: ${issue.author}</p>
<p class="text-sm">Priority: ${issue.priority}</p>

`;

card.onclick = () => openModal(issue.id);

container.appendChild(card);

});

}


async function openModal(id){

const res = await fetch(
`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
);

const data = await res.json();
const issue = data.data;

document.getElementById("modalTitle").innerText = issue.title;
document.getElementById("modalDesc").innerText = issue.description;
document.getElementById("modalStatus").innerText = issue.status;
document.getElementById("modalAuthor").innerText = issue.author;
document.getElementById("modalPriority").innerText = issue.priority;

document.getElementById("modal").classList.remove("hidden");

}

function closeModal(){
document.getElementById("modal").classList.add("hidden");
}


async function searchIssue(){

const text = document.getElementById("searchInput").value;

const res = await fetch(
`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`
);

const data = await res.json();

displayIssues(data.data);

}

loadIssues("all");



