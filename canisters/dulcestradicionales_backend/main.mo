import Text "mo:base/Text";
import Array "mo:base/Array";
import Nat "mo:base/Nat";
import D "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import { stable_store, stable_restore } from "ic-cdk";

// Backend del canister

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

  public func buscarUsuarios () : async [(Text, Usuario)] {
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
        usuarios.put(id, user);
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
    nombreProducto: Text;
    idProducto: Text;
    descripcion: Text;
    precio: Text;
    nombreArtesano: Text;
    imagen: [Nat8];
  };

  type IndiceProd = Nat;
  var indiceprod: IndiceProd = 0;
  let productos = HashMap.HashMap<Text, Productos>(0, Text.equal, Text.hash);

  private func generateIEvent() : Nat {
    indiceprod += 1;
    return indiceprod;
  };

  public func crearProductos(nombreProducto: Text, idProducto: Text, descripcion: Text, precio: Text, nombreArtesano: Text, imagen: [Nat8]) : async () {
    let postevent = {
      nombreProducto = nombreProducto;
      idProducto = idProducto;
      descripcion = descripcion;
      precio = precio;
      nombreArtesano = nombreArtesano;
      imagen = imagen;
    };

    let clave = Nat.toText(generateIEvent());
    productos.put(clave, postevent);
    D.print("Nuevo Producto Creado: " # nombreProducto);

    // Guardar los datos en la memoria estable
    stable_store([postevent]);

    return ();
  };

  public func buscarProductos() : async [(Text, Productos)] {
    let productIter: Iter.Iter<(Text, Productos)> = productos.entries();
    let productArray: [(Text, Productos)] = Iter.toArray(productIter);
    return productArray;
  };

  public func actualizarProductos(id: Text, nombreProducto: Text, descripcion: Text, precio: Text, nombreArtesano: Text, imagen: [Nat8]) : async Bool {
    let producto: ?Productos = productos.get(id);

    switch (producto) {
      case (null) {
        return false;
      };
      case (?currentProducto) {
        let productoActualizado: Productos = {
          nombreProducto = nombreProducto;
          idProducto = idProducto;
          descripcion = descripcion;
          precio = precio;
          nombreArtesano = nombreArtesano;
          imagen = imagen;
        };
        productos.put(id, productoActualizado);
        D.print("Producto actualizado con id: " # id);
        return true;
      };
    };
  };

  public func eliminarProducto(id: Text) : async Bool {
    let producto: ?Productos = productos.get(id);
    switch (producto) {
      case (null) {
        return false;
      };
      case (_) {
        ignore productos.remove(id);
        D.print("Producto eliminado con id: " # id);
        return true;
      };
    };
  };
};
