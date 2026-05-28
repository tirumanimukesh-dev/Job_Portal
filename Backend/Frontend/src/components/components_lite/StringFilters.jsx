// StringFilters.jsx
export const applyStringFilters = (job, searchedQuery) => {
  const query = searchedQuery?.toLowerCase() || "";

  const matchText =
    job.title?.toLowerCase().includes(query) ||
    job.description?.toLowerCase().includes(query) ||
    job.location?.toLowerCase().includes(query) ||
    job.requirements?.join(" ").toLowerCase().includes(query);

  let matchJobType = true;
  if (searchedQuery.jobType) {
    matchJobType =
      job.jobType?.toLowerCase() === searchedQuery.jobType.toLowerCase();
  }
const finalResult =
     matchText &&
     matchJobType;

   console.log(
     "FINAL FILTER RESULT 1:",
     finalResult
   );
  return matchText && matchJobType;
};


