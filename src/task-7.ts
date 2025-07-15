console.log("// Task №7 (In the end).");

function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then(result => console.log(result));

console.log(" ");