const createCircle = (radius) =>{
    return {
        radius: radius,
        diameter: 2*radius,
        area : function(){
            return (22/7)*radius**2
        },
        perimeter: function() {
            return 2*(22/7)*radius
        }
    }
}


