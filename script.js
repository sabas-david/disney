
var position= [];

// position d'un element
var intElemScrollHeight = document.getElementById('original').offsetTop;
console.log(intElemScrollHeight);

// detection du sscroll
window.addEventListener('scroll', function() {
    console.log("Scrollin'");
  });

//   parcourir un tableau
//   var x = ["un", "deux", "trois" ];
//     for(var i= 0; i < x.length; i++)
//     {
//      document.write(x[i]);
//     }


    // inserer des element dans le tableau
    // var n = fruits.push('Orange');
    var scrollTop = document.getElementsByClassName('container').scrollTop,
     windowHeight = window.innerHeight,
    scrollHeight = document.body.scrollHeight;
 
var scrollPercent = (scrollTop / (scrollHeight - windowHeight)) * 100;
console.log('====================================');
console.log(scrollPercent);
console.log('====================================');
    
    // var cible = document.getElementsByClassName('container');
    // var hasChilds = cible.hasChildNodes();
    // console.log(hasChilds);
    // // if (haschilds) {
    //     var children = cible.childNodes;
      
    //     for (var i = 0; i < children.length; i++) {
    //         position.push(children[i]);
    //       // faire quelque chose avec chaque enfant[i]
    //     }
    //   }

    // for (var i = 0; i < items.length; i++) {
    //     copie.push(items[i]);
    //   }