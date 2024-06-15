import Text "mo:base/Text";
import Array "mo:base/Array";
import Nat "mo:base/Nat";
import D "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
//import Identity "ic:canister/identity";
import Int "mo:base/Int";
//import Time "mo:base/Time";
import Principal "mo:base/Principal";

//Backend del canister

actor dulcestradicionalesCanister {

  type Usuario = {
    nombreu: Text;
    primerapellido: Text;
    segundoapellido : Text;
    telefono : Text;
    canalesS: Text;
    direccion: Text;
    tipo: Text; // "productor" o "cliente"
  };
  type Indice = Nat;
  var indiceusr: Indice = 0;
  let usuarios = HashMap.HashMap<Text, Usuario>(0, Text.equal, Text.hash);


  private func generateIUser() : Nat {
    indiceusr += 1;
    return indiceusr;
  };

  public func crearUsuarios(nombreu:Text, primerapellido:Text, segundoapellido:Text, telefono:Text, canalesS:Text, direccion:Text, tipo:Text) : async () {
    let postuser = {nombreu = nombreu; primerapellido = primerapellido; segundoapellido = segundoapellido; telefono = telefono; canalesS = canalesS; direccion = direccion; tipo = tipo};

    let clave = Nat.toText(generateIUser());
    usuarios.put(clave, postuser);
    D.print("Nuevo Usuario Creado: " # nombreu);
    return ();
  };

  public func buscarUsuarios () : async [(Text, Usuario)]{
    let userIter : Iter.Iter<(Text, Usuario)> = usuarios.entries();
    let userArray : [(Text, Usuario)] = Iter.toArray(userIter);
    return userArray;

  };

  public func buscarUsuariosid (id: Text) : async ?Usuario {
    let user: ?Usuario = usuarios.get(id);
    return user;
  };

  
public func actualizarUsuario (id:Text, nombreu:Text, primerapellido:Text, segundoapellido:Text, telefono:Text, canalesS:Text, direccion:Text, tipo:Text) : async Bool {
    let user: ?Usuario= usuarios.get(id);

    switch (user) {
      case (null) {
        return false;
      };
      case (?currentuser) {
        let user: Usuario = {nombreu = nombreu; primerapellido = primerapellido; segundoapellido = segundoapellido; telefono = telefono; canalesS = canalesS; direccion = direccion; tipo = tipo};
        usuarios.put(id,user);
        D.print("Ha sido actualizado el usuario con id: " # id);
        return true;
      };
    };

  };

  public func verificarCuentaUsuario(id:Text) : async Text {
    let user: ?Usuario = usuarios.get(id);
    if (user != null) {
      return "Cuenta de usuario verificada correctamente";
    } else {
      return "Cuenta de usuario no verificada";
    }
  };

  public func eliminarUsuario (id: Text) : async Bool {
		let user : ?Usuario = usuarios.get(id);
		switch (user) {
			case (null) {
				return false;
			};
			case (_) {
				ignore usuarios.remove(id);
				D.print("Ha sido eliminado el usuario con id: " # id);
				return true;
			};
		};
	};


  type Productos = {
    nombre: Text;
    descripcion: Text;
    precio: Text;
    reservacion: Text;
    fecha: Text;
    hora: Text;
  };

type IndiceProd = Nat;
  var indiceprod: IndiceProd = 0;

  private func generateIEvent() : Nat {
    indiceprod += 1;
    return indiceprod;
  };

  //var productos : [Productos] = [];
  let productos = HashMap.HashMap<Text, Productos>(0, Text.equal, Text.hash);

  public func crearProductos(nombre:Text, descripcion:Text, precio:Text, reservacion:Text, fecha:Text, hora:Text) : async () {
    let postevent = {
      nombre = nombre;
      descripcion = descripcion;
      precio = precio;
      reservacion = reservacion;
      fecha = fecha;
      hora = hora;
    };

    let clave = Nat.toText(generateIEvent());
    productos.put(clave, postevent);
    D.print("Nuevo Evento Creado: " # nombre);
    return ();
  };

  public func actualizarProductos(id : Text, nombre : Text, descripcion : Text, precio : Text, reservacion : Text, fecha : Text, hora : Text) : async Bool {
    let event : ?Productos = productos.get(id);

    switch (event) {
      case (null) {
        return false;
      };
      case (?currentevent) {
        let event : Productos = {
          nombre = nombre;
          descripcion = descripcion;
          precio = precio;
          reservacion = reservacion;
          fecha = fecha;
          hora = hora;
        };
        productos.put(id, event);
        D.print("Actualizado Producto con id: " # id);
        return true;
      };
    };

  };

  public func identificacionProductos(id : Text) : async Text {
    let event : ?Productos = productos.get(id);
    if (event != null) {
      return "Productos identificado correctamente";
    } else {
      return "Productos no identificado";
    };
  };

  //Autorizar y buscar productos
  public func autorizarProductos(id:Text):async Text {
    let event: ?Productos = productos.get(id);
    if (event != null) {
      return "Productos autorizado correctamente";
    } else {
      return "Productos no autorizado";
    }
  };

  public func buscarProductos () : async [(Text, Productos)]{
    let eventIter : Iter.Iter<(Text, Productos)> = productos.entries();
    let eventArray : [(Text, Productos)] = Iter.toArray(eventIter);
    return eventArray;

  };

  public func buscarProductosid (id: Text) : async ?Productos {
    let event: ?Productos = productos.get(id);
    return event;
  };

  public func eliminarProducto(id: Text) : async Bool {
		let event : ?Productos = productos.get(id);
		switch (event) {
			case (null) {
				return false;
			};
			case (_) {
				ignore productos.remove(id);
				D.print("Ha sido eliminado el evento con id: " # id);
				return true;
			};
		};
	};

  public func calendarizacionProductos(id:Text):async Text {
    let event: ?Productos = productos.get(id);
    if (event != null) {
      return "Productos calendarizado";
    } else {
      return "Productos no existente";
    }

  };

  
public func pagoProductos(id:Text):async Text {
    let event: ?Productos = productos.get(id);
    if (event != null) {
      return "Pago realizado correctamente";
    } else {
      return "Pago no realizado por indice invalido";
    }
  };

};
