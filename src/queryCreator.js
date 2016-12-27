//ideally they will just have to change this file if they want to have a custom
//table
const queryCreator=(name)=>{
  return {
      "visualizer-id": "",
      "sort":"[[\"short-name.source-value\",1],[\"meta.subject.kimcode\",1]]",
       "query": "{\"meta.type\":\"tr\",\"property-id\":\"tag:staff@noreply.openkim.org,2014-04-15:property/cohesive-potential-energy-cubic-crystal\",\"meta.runner.kimcode\":{\"$regex\":\"^LatticeConstantCubicEnergy_.*\"},\"species.source-value\":{\"$all\":[\""+name+"\"],\"$not\":{\"$elemMatch\":{\"$nin\":[\""+name+"\"]}}}}",
       "fields": "{\"a.si-value\":1,\"cohesive-potential-energy.si-value\":1,\"meta.subject.kimcode\":1,\"meta.runner.kimcode\":1,\"short-name.source-value\":1}",
       "database": "data"
  }
}

export default queryCreator
