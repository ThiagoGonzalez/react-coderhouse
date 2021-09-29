import { getFirestore } from "../firebase/config";
import firebase from "firebase/app";
import 'firebase/firestore'

export const generarOrden = (buyer, carrito, totalCarrito) => {

    return new Promise((resolve, reject) => {
        const db = getFirestore()
        const orders = db.collection('orders')

        const newOrder ={
            buyer: buyer,
            items: carrito,
            total: totalCarrito(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        carrito.forEach((prod) => {
            const docRef = db.collection('productos').doc(prod.id)

            docRef.get()
                .then(doc => {
                    docRef.update({
                        stock: doc.data().stock - prod.cantidad
                    })
                })
        })

        orders.add(newOrder)
            .then((res) => {
                resolve(res.id)
            })
            .catch((err) => {
                reject(err)
            })
    })
    
    

}