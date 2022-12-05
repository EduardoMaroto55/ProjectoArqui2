<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>CPU</title>
</head>
<body>
    <div class="CPU">
      CPU
      <div class="UC">
        Unidad de Control  
      </div>
      <div class="ALU">
        Unidad de Aritmetica Logica
      </div>
      <input type="Acumulador" class="Acumulador">
      <input type="Acumulador" class="Estado">
      <input type="Acumulador" class="Registro1">
      <input type="Acumulador" class="Registro2">
    </div>
    <span class="Arrow1">&#10230;</span>
    <span class="Arrow2">&#10230;</span>
    <span class="Arrow3">&#10230;</span>
    <span class="Arrow4">&#8593;</span>
    <span class="Arrow5">&#8593;</span>
    <span class="Arrow6">&#8595;</span>
    <span class="Arrow7">&#8592;</span>
    <span class="Arrow8">&#8592;</span>


    <hr class="line1">
    <hr class="line2">
    <hr class="line3">
    <hr class="line4" width="1" size="139" style="1 auto" />
    <hr class="line5" width="1" size="114" style="1 auto" />
    <hr class="line6" width="1" size="145" style="1 auto" />
    <hr class="line7" width="1" size="310" style="1 auto" />
    <hr class="line8" width="1" size="250" style="1 auto" />
    <hr class="line9" width="1" size="250" style="1 auto" />
    <hr class="line10">

    <div class = "Instructions">
      Instrucciones
      <br>
    <button id="tbrun" onclick="iniciar()">RUN</button>
    <button id="cleanIT" onclick="clean()">CLEAN</button>
    <br>
    <textarea type="text" id="textarea" style="width: 410px; height: 368px;"></textarea>
    </div>

    <div class="Registros">
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
    </div>
    <script  src='proceso.js' defer></script>
</body>

</html>