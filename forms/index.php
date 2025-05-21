<?php 
$name = '';
$data = '';

if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
    $name = htmlspecialchars($_POST['name']);
    $data = htmlspecialchars($_POST['texto']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Datos anteriormente guardados:</h1>
    <p>Name: <?php echo $name; ?></p>
    <p>Dato: <?php echo $data; ?></p>

    <h1>Formulario:</h1>
    <form action="index.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="dato">Dato:</label>
        <input type="text" id="texto" name="texto" required>
        <br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>