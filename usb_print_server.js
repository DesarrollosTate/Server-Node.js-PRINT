const express = require("express");
const bodyParser = require("body-parser");
const exec = require("child_process").exec;
const app = express();
const nodePrinter = require("@thiagoelg/node-printer");

const port = 3000;
//const defaultPrinterName = "ZDesigner GK420t";

app.use(bodyParser.text());

// /imprimir?printer=ZDesigner GK420t
app.post("/imprimir", (req, res) => {
  const { printer } = req.query;
  const codigoZPL = req.body;

  if (!printer)
    return res.status(500).send("Nombre de impresora invalido (query printer)");

  nodePrinter.printDirect({
    data: codigoZPL,
    type: "RAW",
    printer: printer,
    error: (error) => {
      console.error("Error while printing", error);
      res.status(500).send({
        success: false,
        message: `ERROR: ${error?.message}`,
        printerName: printer,
        jobId: null,
      });
    },
    success: (jobId) => {
      console.log("Success print jobId: ", jobId);
      res
        .status(200)
        .send({ success: true, printerName: printer, jobId, message: "OK" });
    },
  });

  /* 
    Ejemplo de body:
  
  `^XA
      ^FWI^FO50,20,^A0,50,50^FD$35000
      ^FS^FO270,90,1^A0,30,40^FD${info.talle}
      ^FS^FO270,410,1^A0,30,30^FD100
      ^FS^FWR^FO190,150^BY2,3,80^BCR,80,Y,N,N,A^FD0002323230001
      ^FS^CFA,20^FO100,100^A0,25,25^FD${info.detalle1}1^FS^FO80,100^FD${info.detalle2}^FS^FO60,100^FDNEW BALANCE INDUMENTARIA [1074]^FS^FO40,100^FD${info.codigoProdProvee}^FS^FO20,100^FD${info.fultCompra} | 20230823^FS
      ^XZ`
  */
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
