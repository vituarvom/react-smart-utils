import { pick } from "./pick";

describe('pick function', () => {
    it("should pick properties from an object", () => {
        const obj = {a:1, b:2, c:3};
        const result = pick(obj, ['a','c']);
        expect(result).toEqual({a:1, c:3});
    });

    it("should return an empty object when no keys are matched",() =>{
        const obj = {a:1,b:2,c:3};
        const result = pick(obj, ['d']);
        expect(result).toEqual({});
    });

    it("it should ignore the key that do no exist",()=>{
        const obj = {a:1,b:2,c:3};
        const result = pick(obj,['a','d']);
        expect(result).toEqual({a:1});
    });

    it("should pick properties from an nested object with dot notation",() =>{
        const obj = {
            user:{
                name:'Ram',
                age: 20,
                address:{
                    state:'Maharastra',
                    city:'Mumbai',
                    pincode:'421302'
                }
            }
        }
        const result = pick(obj, ['user.name','user.address.state']);
        expect(result).toEqual({
            user:{
                name:'Ram',
                address:{
                    state:'Maharastra'
                }
            }
        });
    });

    it("should pick properties from an deep nested object",() =>{
        const obj ={
            user:{
                details:{
                    name:'Ram',
                    age: 20,
                    address:{
                        state:'Maharastra',
                        city:'Mumbai',
                        pincode:'421302'
                    }
                }
            }
        }

        const result = pick(obj, ['user.details.address.state']);
        expect(result).toEqual({
            user:{
                details:{
                address:{
                    state:'Maharastra'
                }
            }
        }
    });
});

it("should return an empty object if the key doesn't exist", () => {
    const obj = {
      user: {
        name: 'Ram', 
        age: 20,
        address: {
          state: 'Maharashtra',
          city: 'Mumbai',
          pincode: '421302'
        }
      }
    };
  
    const result = pick(obj, ['user.gender']);
    expect(result).toEqual({});
  });
  
});