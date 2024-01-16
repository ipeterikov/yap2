let generateBtn = document.getElementById("generate-btn");

function downloadPasswords(passwords) {
  const text = passwords.join('\n');
  const blob = new Blob([text], { type: 'text/plain' });
  const anchor = document.createElement('a');

  anchor.download = 'passwords.txt'; 
  anchor.href = window.URL.createObjectURL(blob);
  anchor.click(); 

  window.URL.revokeObjectURL(anchor.href); 
}


function generatePasswords(length, setSymbols, count) {
  let generatedPasswords = [];
  for (let i = 0; i < count; i++) {
      let password = '';
      for (let j = 0; j < length; j++) {
          let randomIndex = Math.floor(Math.random() * setSymbols.length);
          password += setSymbols.charAt(randomIndex);
      }
      generatedPasswords.push(password);
  }
  return generatedPasswords;
}
generateBtn.addEventListener("click", () => {
  const count = document.getElementById('count').value;
  if (count>50) count=50;
  const len = document.getElementById('length').value;
  if (len>30) len=30;
  let setSymbols=[];
  const upCase = document.getElementById('upC').checked;
  if (upCase) setSymbols+='QWERTYUIOPASDFGHJKLZXCVBNM';
  const lowCase = document.getElementById('lowC').checked;
  if (lowCase) setSymbols+='qwertyuiopasdfghjklzxcvbnm';
  const nums = document.getElementById('num').checked;
  if (nums) setSymbols+='1234567890';
  const symbols = document.getElementById('symbols').checked;
  if (symbols) setSymbols+='~!@#$%^&*()`{}[]:;<.?,';

  let result = document.getElementById('result');

  let passwords = generatePasswords(len,setSymbols,count);
  passwords.forEach(password => {
    result.innerHTML += `<p>${password}</p>`;
});
downloadPasswords(passwords);
});