async function askAI() {
    const inputField = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');
    const userText = inputField.value.trim();
    
    if (!userText) return;

   
    chatbox.innerHTML += `<div class="message user-msg">${userText}</div>`;
    
    inputField.value = '';
    chatbox.scrollTop = chatbox.scrollHeight;

    
    const typingId = "typing-" + Date.now();
    chatbox.innerHTML += `<div id="${typingId}" class="message ai-msg">Typing...</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
        document.getElementById(typingId).remove();
        
        let aiResponse = "";
        let lowerInput = userText.toLowerCase();

       
        if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
            aiResponse = "Hello! Aaj hum kya padhein? Tum kisi bhi computer science topic ya general study ke bare me pooch sakti ho.";
        } 
        else if (lowerInput.includes("gate") || lowerInput.includes("cs")) {
            aiResponse = "GATE 2027 Computer Science ki preparation ke liye pehle Data Structures, Algorithms, aur OS jaise core subjects cover karna best rahega. Kya hum DSA se start karein?";
        } 
        else if (lowerInput.includes("java") || lowerInput.includes("dsa") || lowerInput.includes("leetcode")) {
            aiResponse = "Java aur DSA practice ke liye LeetCode par pehle Arrays aur Strings ke easy problems solve karna start karo. Logic building par focus rakhna jaruri hai.";
        } 
        else if (lowerInput.includes("binomial theorem")) {
            aiResponse = "Binomial Theorem ek mathematical formula hai jo (x + y)^n ko expand karne me kaam aata hai. Isme combinations (nCr) ka use hota hai. Kya main iska formula likh kar samjhaun?";
        } 
        else if (lowerInput.includes("study materials")) {
            aiResponse = "Tumhe kin subjects ke study materials chahiye? Main tumhe kuch best open-source books aur video lectures ke links recommend kar sakta hu.";
        }
        else {
            aiResponse = "Ye ek accha sawal hai. Is topic ke deep concepts ko samajhne ke liye tumhe iske basics clear karne honge. Kya tum iska ek example dekhna chahti ho?";
        }
        
       
        chatbox.innerHTML += `<div class="message ai-msg">${aiResponse}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1500); 
}


document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        askAI();
    }
});