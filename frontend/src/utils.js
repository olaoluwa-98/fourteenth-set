let courseCodes = {
  aa: ["accounting"],
  ab: ["business administration"],
  ac: ["industrial relations and human resource management"],
  ad: ["marketing"],
  ae: ["demography and social statistics"],
  af: ["economics"],
  ag: ["banking and finance"],
  ah: ["international relations"],
  ai: ["political science"],
  ak: ["policy and strategic studies"],
  bb: ["psychology"],
  bc: ["english language"],
  bd: ["french"],
  be: ["mass communication"],
  bg: ["sociology"],
  ca: ["architecture"],
  cb: ["building technology"],
  cc: ["industrial chemistry"],
  cd: ["industrial mathematics"],
  cp: ["biochemistry"],
  cq: ["microbiology"],
  ce: [
    "industrial physics-applied geophysics",
    "industrial physics-electronics and it application",
    "industrial physics-renewable energy"
  ],
  cf: ["chemical engineering"],
  cg: ["computer science"],
  ch: ["management information system"],
  ci: ["civil engineering"],
  cj: ["computer engineering"],
  ck: [
    "electrical and electronics engineering",
    "information and communication engineering"
  ],
  cl: ["estate management"],
  cm: ["mechanical engineering"],
  cn: ["petroleum engineering"],
  co: ["biology"]
};

let courseCodeList = Object.keys(courseCodes);

export function validateMatricNo(matricNo) {
  let result = { error: false, msg: "", programs: [] };
  if (matricNo == null || matricNo == undefined) {
    result.error = true;
    result.msg = "Matriculation number is required";
  }
  
  matricNo = matricNo.toLowerCase();
  let courseCode = matricNo.substr(2, 2);
  if (!courseCodeList.includes(courseCode)) {
    result.error = true;
    result.msg = "Course code doesn't exist";
  }
  // 15CG035944 is validated and should not be FIX!
  // Matriculation numbers longer than 10 is working also
  const verify = /(0[1-9]|1[0-4]|1[6-9])([a-z]{2})([0-9]{6})|(15)([a-z]{2})([0-9]{5})/;

  if (matricNo.match(verify)) {
    result.programs = courseCodes[courseCode];
  } else {
    result.error = true;
    result.msg = "Matriculation number is invalid";
  }
  return result;
}
