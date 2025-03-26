const token=process.env.AI_TOKEN||"";

async function genText(prompt){
  const url=`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${token}`;
  const res=await fetch(url,{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:{
      contents:[
        {
          parts:[
            {
              text:prompt
            }
          ]
        }
      ]
    }
  });
  return res;
}
