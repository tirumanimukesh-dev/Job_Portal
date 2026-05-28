export const applyNumericFilters = (job, searchedQuery) => {
  
  let matchExperience = true;
  if (searchedQuery.Experience) {
    const exp = parseInt(job.experienceLevel, 10); 
    const expFilter = searchedQuery.Experience.toLowerCase().trim();

    
    function zeroToThreeYears(exp) {
      let match = false;
      for (let i = 0; i <= 3; i++) {
        if (exp === i) {
          match = true;
          break;
        }
      }
      return match;
    }

    function threeToFiveYears(exp) {
      let match = false;
      for (let i = 3; i <= 5; i++) {
        if (exp === i) {
          match = true;
          break;
        }
      }
      return match;
    }

    function fiveToSevenYears(exp) {
      let match = false;
      for (let i = 5; i <= 7; i++) {
        if (exp === i) {
          match = true;
          break;
        }
      }
      return match;
    }

    switch (expFilter) {
      case "0-3 years":
      case "0-3":
        matchExperience = zeroToThreeYears(exp);
        break;

      case "3-5 years":
      case "3-5":
        matchExperience = threeToFiveYears(exp);
        break;

      case "5-7 years":
      case "5-7":
        matchExperience = fiveToSevenYears(exp);
        break;

      case "7+ years":
      case "7+":
        matchExperience = exp >= 7;
        break;

      default:
        matchExperience = true;
    }
  }

  
  let matchSalary = true;

  if (searchedQuery.salary) {
    const salary = parseInt(job.salary, 10); 
    const salaryFilter = searchedQuery.salary.toLowerCase().trim();

    
    function zeroToFiftyK(salary) {
      let match = false;

      for (let i = 0; i <= 50; i++) {
        if (salary === i) {
          match = true;
          break;
        }
      }

      return match;
    }

    function fiftyToHundredK(salary) {
      let match = false;

      for (let i = 50; i <= 100; i++) {
        if (salary === i) {
          match = true;
          break;
        }
      }

      return match;
    }

    function hundredToTwoHundredK(salary) {
      let match = false;

      for (let i = 100; i <= 200; i++) {
        if (salary === i) {
          match = true;
          break;
        }
      }

      return match;
    }

    switch (salaryFilter) {
      case "0-50k":
        matchSalary = zeroToFiftyK(salary);
        break;

      case "50k-100k":
        matchSalary = fiftyToHundredK(salary);
        break;

      case "100k-200k":
        matchSalary = hundredToTwoHundredK(salary);
        break;

      case "200+k":
        matchSalary = salary >= 200;
        break;

      default:
        matchSalary = true;
    }
  }

  const f = matchSalary;
  console.log(f);

  return matchExperience && matchSalary;
};