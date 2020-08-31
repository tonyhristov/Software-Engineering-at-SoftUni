let BookStore = require('../02.Book-Store.js');
const expect = require('chai').expect;

describe('BookStore unit tests', function() {
   let store;
   beforeEach(function() {
      store = new BookStore('SoftUni');
   });

   describe('constructor tests', function() {
      it('should initialize properties correctly', function() {
         expect(store.name).to.equal('SoftUni');
         expect(store.books).to.deep.equal([]);
         expect(store.workers).to.deep.equal([]);
      });
   });

   describe('stockBooks() - tests', function() {
      it('should change length correctly', function() {
         store.stockBooks(['Book1-Author1']);
         expect(store.books.length).to.equal(1);
      });

      it('should push correct item', function() {
         const expectedBook = { title: 'Book1', author: 'Author1' };
         store.stockBooks(['Book1-Author1']);
         expect(store.books[0]).to.deep.equal(expectedBook);
      });
   });

   describe('hire() - tests', function() {
      it('should throw error', function() {
         store.hire('testPerson', 'Student');
         const hire = () => store.hire('testPerson', 'Student');
         expect(hire).to.throw(Error, 'This person is our employee');
      });

      it('should hire a person', function() {
         const worker = {
            name: 'testPerson',
            position: 'Student',
            booksSold: 0,
         };
         const outputMsg = store.hire('testPerson', 'Student');
         expect(store.workers.length).to.equal(1);
         expect(outputMsg).to.equal(
            'testPerson started work at SoftUni as Student'
         );
         expect(store.workers[0]).to.deep.equal(worker);
      });
   });

   describe('fire() - tests', function() {
      it('should throw error', function() {
         const fire = () => store.fire('testPerson', 'Student');
         expect(fire).to.throw(Error, `testPerson doesn't work here`);
      });

      it('should fire a person', function() {
         store.hire('testPerson', 'Student');
         const outputMsg = store.fire('testPerson');
         expect(outputMsg).to.equal('testPerson is fired');
         expect(store.workers.length).to.equal(0);
      });
   });

   describe('sellBook() - tests', function() {
      it('should throw error - book not found', function() {
         const sellBook = () => store.sellBook('Book1', 'testPerson');
         expect(sellBook).to.throw(Error, 'This book is out of stock');
      });
      it('should throw error - worker not found', function() {
         store.stockBooks(['Book1-Author1']);
         const sellBook = () => store.sellBook('Book1', 'testPerson');
         expect(sellBook).to.throw(Error, 'testPerson is not working here');
      });

      it('should sell book correctly', function() {
         store.stockBooks(['Book1-Author1']);
         store.hire('testPerson', 'Student');
         store.sellBook('Book1', 'testPerson');
         expect(store.workers[0].booksSold).to.equal(1);
         expect(store.books.length).to.equal(0);
      });
   });

   describe('printWorkers() - tests', function() {
      it('should print correctly', function() {
         store.hire('testPerson', 'Student');
         const expectedMsg = store.printWorkers();
         expect(expectedMsg).to.equal(
            'Name:testPerson Position:Student BooksSold:0'
         );
      });
   });
});
