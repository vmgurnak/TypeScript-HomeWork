// typeof

function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

// instanceof
// принадлежность объекта к классу

class MyResponce {
  header: "responce header";
  result: "responce result";
}

class MyError {
  header: "error header";
  message: "error message";
}

function handle(responce: MyResponce | MyError) {
  if (responce instanceof MyResponce) {
    return {
      info: responce.result + responce.header,
    };
  }
  return {
    info: responce.message + responce.header,
  };
}

//----------------------

type AlertType = "success" | "danger" | "warning";

function setAlertType(type: AlertType) {
  // ...
}

setAlertType("danger");
setAlertType("warning");
setAlertType("success");
// setAlertType("unknown"); // error
