 const NewNote = document.querySelector("#NewNote")
 const mainsection = document.querySelector("#mainsection")

 NewNote.addEventListener(
    "click",
    function() {
        New()
    }
 )

    const New = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
         <p class="notehead">Note</p>
         <i class="saveit fas fa-save"></i>
         <i class="trash fa-solid fa-xmark"></i> 
    </div>
    <textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove()
            saving()
        }
    )
    note.querySelector(".saveit").addEventListener(
        "click",
        function() {
            saving()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saving()
        }
    )
    mainsection.appendChild(note);
    saving()
 }

 const saving = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
            (note) => {
                data.push(note.value)
            }
        )
        // console.log(data)
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
 } 




 (
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            New()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    New(lsNote)
                }
            )
        }

    }
 )()


 // NAVBAR

    const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");
    menuBtn.onclick = ()=>{
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
    cancelBtn.onclick = ()=>{
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
      cancelBtn.style.color = "#ff3d00";
    }
    searchBtn.onclick = ()=>{
      form.classList.add("active");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }


