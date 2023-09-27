export function spinner() {
  //no se puede inyectar ninguna dependencia
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const oldValue = descriptor.value;
      descriptor.value = async function(...args:[]){
        try{
          console.log("spinner on")
          return await oldValue.apply(this,args)
        }
        catch(err){
            console.log(err)
        }
        finally{
          console.log("spinner off")
        }
      }
  };
}
