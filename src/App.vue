<template>
    <div class="container">
        <header>
        <h1>Quizes</h1>
        <input type="text" placeholder="Search Quizes...">
        </header>
        <div class="options-container">
        <div class="card">
            <img src="" alt="">
            <div class="card-text">
            <h2>math</h2>
            <p>15 questions</p>
            </div>
        </div>
        
        </div>
        
    </div>
</template>


<style scoped>

.container{
    max-width: 1000px;
    margin: 0 auto;
}
header{
    margin-top: 30px;
    margin-bottom: 10px;
    display:flex;
    align-items: center;
}
header h1{
    font-weight: bold;
    margin-right: 30px;
}
header input{
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}

.options-container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}

/* card */

.card{
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 35px;
    margin-right: 25px;
    cursor: pointer;
}
.card img{
    width: 100%;
    height: 190px;
    margin: 0;
}
.card .card-text{
    padding: 0 5px;
}
.card .card-text h2{
    font-weight: bold;
}
.card .card-text p{
    margin-bottom: 0.3rem;
}
</style>