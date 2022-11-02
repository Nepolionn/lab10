let lab1 = [5,5,0,5,5,10,10]
let lab2 = [5,5,5,5,5,5,10]
let lab3 = [5,10,10,15]
let lab4_5 = [10,5,5,5,5,5,10,10,10,10,5]
let lab6 = [5,5,10,5,5,10]
let lab8 = [5,10,10,10,5]

function get_sum(lab){
  S=0;
  for (let i=0; i <lab.length;i++)
  S=S+lab[i]
  return S
}
get_sum(lab1);
get_sum(lab2);
get_sum(lab3);
get_sum(lab4_5);
get_sum(lab6);
get_sum(lab8);
console.log(get_sum(lab1));
console.log(get_sum(lab2));
console.log(get_sum(lab3));
console.log(get_sum(lab4_5));
console.log(get_sum(lab6));
console.log(get_sum(lab8));


function main(lab1,lab2,lab3,lab4_5,lab6,lab8) {

    let sum1 = get_sum(lab1)
    let sum2 = get_sum(lab2)
    let sum3 = get_sum(lab3)
    let sum4_5 = get_sum(lab4_5)
    let sum6 = get_sum(lab6)
    let sum8 = get_sum(lab8)
    let quiz = [34]
    let sum_max = [280]
    let quiz_max = [40]
    let sum_per = [60]
    let quiz_per = [40] 
    let sums = [sum1,sum2,sum3,sum4_5,sum6,sum8]
    let total_score = (sum1+sum2+sum3+sum4_5+sum6+sum8)/sum_max*sum_per+(quiz/quiz_max*quiz_per)

  const results = {
        lab1 : [5,5,0,5,5,10,10],
        lab2 : [5,5,5,5,5,5,10],
        lab3 : [5,10,10,15],
        lab4_5 : [10,5,5,5,5,5,10,10,10,10,5],
        lab6 : [5,5,10,5,5,10],
        lab8 : [5,10,10,10,5],
        quiz: [34],
        sums : [sum1,sum2,sum3,sum4_5,sum6,sum8],
        total_score: total_score,

 
    }
    return results
  }
  console.log (main(lab1,lab2,lab3,lab4_5,lab6,lab8))
