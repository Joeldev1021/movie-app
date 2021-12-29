export const filterMovie = (f) => {
  let resType;
  let resDate;
  console.log(f);
  if (f.includes("all")) {
    resType = "all";
  } else if (f.includes("tv") && f.includes("movie")) {
    resType = "all";
  } else if (f.includes("tv") || f.includes("movie")) {
    const x = f.indexOf("tv") > -1 ? "tv" : "movie";
    resType = x;
  } else if (f.includes("day") && f.includes("week")) {
    resDate = "week";
  } else if (f.includes("day") || f.includes("week")) {
    const x = f.indexOf("day") > -1 ? "day" : "week";
    resDate = x;
  }
  return { resType, resDate };
};

export const filterMovieType = (f) => {
  let resType;
  if (f.includes("all")) {
    resType = "all";
  } else if (f.includes("tv") && f.includes("movie")) {
    resType = "all";
  } else if (f.includes("tv") || f.includes("movie")) {
    const x = f.indexOf("tv") > -1 ? "tv" : "movie";
    resType = x;
  }
  return resType;
};

export const filterMovieDate = (f) => {
  let resDate;
  if (f.includes("day") && f.includes("week")) {
    resDate = "week";
  } else if (f.includes("day") || f.includes("week")) {
    const x = f.indexOf("day") > -1 ? "day" : "week";
    resDate = x;
  }
  return resDate;
};
