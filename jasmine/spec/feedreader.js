/* This function contains all of the tests
 */
$(function() {

    /* Test suite named "RSS Feeds" */
    describe('RSS Feeds', function() {

        /* First test make sure that the allFeeds variable
         * has been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Second test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('URL defined', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            };
        });

        /* Third test loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is not empty.
         */
        it('name defined', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            };
        });
    });

    /* Test suite named "The menu" */
    describe('The menu', function() {

        /* First test ensures the menu element is hidden by default */
        it('menu hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Second test ensures the menu changes visibility when the menu icon is clicked
         * The menu display when clicked and hide when clicked again.
         */
        it('menu is visible or not', function() {
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* using the Jasmine beforeEach because loadFeed() is async */
        beforeEach(function(done) {
            loadFeed(0, done);
        }); 

        /* This test ensures when the loadFeed function is called. 
         * Checking if there is at least a single .entry element
         * within the .feed container. 
         */
        it('verify entries', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        let n = 0;
        let NewFeed = null,
        oldContent;

        /* using the Jasmine beforeEach because loadFeed() is async */
        beforeEach(function(done) {
            loadFeed(n, function() {
                oldContent = $('.feed').html();
                loadFeed(n + 1, function () {
                    NewFeed = $('.feed').html();
                    done();
                });
            });
        });

        /* This test ensures when a new feed is loaded by the loadFeed function
         * that the content actually changes.
         */
        it('new feed is loaded', function(){
            expect(NewFeed).not.toBe(oldContent);
        });
    });
}());