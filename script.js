        // Handle greeting
        document.getElementById("greetBtn").addEventListener("click", function () {
            const name = document.getElementById("nameInput").value.trim();
            const greeting = document.getElementById("greeting");
            
            if (name) {
                greeting.textContent = "Hello, " + name + "!";
            } else {
                greeting.textContent = "Hello";
            }
        });

        // Handle box color
        const boxContainer = document.getElementsByClassName("box-container")[0];
        
        boxContainer.addEventListener("click", function (e) {
            const box = e.target;
            
            if (box.className.includes("box")) {
                const color = box.getAttribute("data-color");
                
                if (box.style.backgroundColor === color) {
                    box.style.backgroundColor = "white";
                    box.style.color = "black";
                } else {
                    box.style.backgroundColor = color;
                    box.style.color = (color === "yellow") ? "black" : "white";
                }
            }
        });
    
