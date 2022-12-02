<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CPU</title>
</head>
<body>
    <button id="tbrun" onclick="iniciar()">RUN</button>
    <button id="cleanIT" onclick="clean()">CLEAN</button>
    <br>
    <textarea type="text" id="textarea" style="width: 410px; height: 368px;"></textarea>
    <br>
    <table>
        <tr>
          <th>Registros</th>
          <th>Decimal</th>
          <th>Hexadecimal</th>
        </tr>
        <tr>
          <td>R0</td>
          <td id="R0D">0</td>
          <td id="R0H">0</td>
        </tr>
        <tr>
          <td>R1</td>
          <td id="R1D">0</td>
          <td id="R1H">0</td>
        </tr>
        <tr>
          <td>R2</td>
          <td id="R2D">0</td>
          <td id="R2H">0</td>
          </tr>
          <tr>
            <td>R3</td>
            <td  id="R3D">0</td>
            <td id="R3H">0</td>
          </tr>
      </table> 
    <script  src="proceso.js"></script>
    
</body>

</html>