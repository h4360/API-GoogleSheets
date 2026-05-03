function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([data.nome, data.email]);
  return ContentService
    .createTextOutput(JSON.stringify({ status: "OK"}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput("API funcionando...")
    .setMimeType(ContentService.MimeType.TEXT);
}
