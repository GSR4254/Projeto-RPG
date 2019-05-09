class Personagem
{
    Personagem(indice, resultado, nome, vida, vidaMax, tipo)
    {
        this.indice = indice;
        this.resultado = resultado;
        this.nome = nome;
        this.vida = vida;
        this.vidaMax = vidaMax;
        this.tipo = tipo;
    }

    receberDano(i)
    {
        var perda;
        objetoPersonagem = ordemDosTurnos[i];
        perda = parseInt(document.getElementById(`vida${i}`).value);
        if(perda == "" || isNaN(perda))
        {
            return;
        }
        objetoPersonagem['vida'] -= perda;
        document.getElementById('ordemDosTurnos').innerHTML ='';
        document.getElementById('ordemDosTurnos').innerHTML = "<button onclick='rolagem()'>Rolar</button><br>";
        if(objetoPersonagem['vida'] <= 0 && objetoPersonagem['tipo'] == 'inimigo')
        {
            ordemDosTurnos.splice(i,1);
        }
        if(objetoPersonagem['vida'] <= 0)
        {
            objetoPersonagem['vida'] = 0;
        }
        for(i=0;i<ordemDosTurnos.length;i++)
        {
            objetoPersonagem = ordemDosTurnos[i];
            document.getElementById('ordemDosTurnos').innerHTML += `${i+1}º -- ${objetoPersonagem['resultado']} -- ${objetoPersonagem['nome']} -- ${objetoPersonagem['vida']} /${objetoPersonagem['vidaMax']}<input id='vida${i}'> <button onclick='objetoPersonagem.receberDano(${i})'>Dano</button> <button onclick='objetoPersonagem.receberCura(${i})'>Cura</button><br>`;
        }
    }
    receberCura(i)
    {
        var ganho;
        objetoPersonagem = ordemDosTurnos[i];
        ganho = parseInt(document.getElementById(`vida${i}`).value);
        if(ganho == '' || isNaN(ganho))
        {
            return;
        }
        objetoPersonagem['vida'] += ganho;
        if(objetoPersonagem['vida'] > objetoPersonagem['vidaMax'])
        {
            objetoPersonagem['vida'] = objetoPersonagem['vidaMax'];
        }
        document.getElementById('ordemDosTurnos').innerHTML ='';
        document.getElementById('ordemDosTurnos').innerHTML = "<button onclick='rolagem()'>Rolar</button><br>";
        for(i=0;i<ordemDosTurnos.length;i++)
        {
            objetoPersonagem = ordemDosTurnos[i];
            document.getElementById('ordemDosTurnos').innerHTML += `${i+1}º -- ${objetoPersonagem['resultado']} -- ${objetoPersonagem['nome']} -- ${objetoPersonagem['vida']} /${objetoPersonagem['vidaMax']}<input id='vida${i}'> <button onclick='objetoPersonagem.receberDano(${i})'>Dano</button> <button onclick='objetoPersonagem.receberCura(${i})'>Cura</button><br>`;
        }
    }
}