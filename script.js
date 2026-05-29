let itensPedido = [];

function adicionar(item) {
    itensPedido.push(item);
    alert(item + " adicionado ao seu pedido!");
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById('lista-pedido');
    lista.innerHTML = '';
    itensPedido.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
}

function finalizarPedido() {
    if(itensPedido.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    
    let texto = "Olá, gostaria de realizar o seguinte pedido na Mellow Lune:%0A";
    itensPedido.forEach(item => {
        texto += "- " + item + "%0A";
    });

    // Substitua pelo seu número de WhatsApp com DDD
    let numeroWhatsApp = "5547999999999"; 
    let url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
    
    window.open(url, '_blank');
}
